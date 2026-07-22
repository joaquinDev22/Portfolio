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
    (e: FormEvent) => {
      e.preventDefault();

      if (validate()) {
        setIsSubmitting(true);
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
      }
    },
    [validate]
  );

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  };
}
