import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      setErrors((prev) => {
        if (prev[name as keyof ContactFormErrors]) {
          return { ...prev, [name]: undefined };
        }
        return prev;
      });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!validate()) return;

      setIsSubmitting(true);
      setSubmitError(null);

      const endpoint =
        import.meta.env.VITE_CONTACT_ENDPOINT ??
        "https://formsubmit.co/ajax/joacodev.mdp@gmail.com";

      const formPayload = new FormData();
      formPayload.append("name", formData.name.trim());
      formPayload.append("email", formData.email.trim());
      formPayload.append("message", formData.message.trim());
      formPayload.append("_subject", `Nuevo mensaje desde tu portfolio`);
      formPayload.append("_captcha", "false");

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formPayload,
        });

        if (!response.ok) {
          throw new Error("El servidor no pudo procesar el mensaje");
        }

        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        window.setTimeout(() => setSubmitSuccess(false), 5000);
      } catch {
        setSubmitError(
          "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos o escríbeme directamente por WhatsApp."
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate]
  );

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleSubmit,
  };
}
