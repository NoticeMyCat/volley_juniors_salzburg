import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { sanitizeInput } from '../utils/sanitize';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export function useContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const updateFormData = (field: keyof ContactFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const submitForm = async () => {
        setStatus('submitting');
        setErrorMessage('');

        try {
            const { error } = await supabase.functions.invoke('send-contact-email', {
                body: JSON.stringify({
                    name: sanitizeInput(formData.name),
                    email: sanitizeInput(formData.email),
                    message: sanitizeInput(formData.message),
                }),
            });

            if (error) {
                console.error('Supabase Edge Function error:', error);
                throw new Error(error.message || 'Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000); // Reset nach 5 Sekunden
        } catch (err: unknown) {
            console.error('Submission error:', err);
            setStatus('error');
            const errorMsg = err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuche es später noch einmal.';
            setErrorMessage(errorMsg);
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return {
        formData,
        updateFormData,
        status,
        errorMessage,
        submitForm,
    };
}
