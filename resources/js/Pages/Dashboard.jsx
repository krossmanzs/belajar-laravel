import { QuizSkeleton } from '@/Components/fragments/QuizSkeleton';
import { Button } from '@/Components/ui/button';
import { Progress } from '@/Components/ui/progress';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/Components/ui/use-toast';
import { useState } from 'react';
import React from 'react';
import clsx from 'clsx';

export default function Dashboard({ auth }) {
    const { toast } = useToast();
  
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswerId, setSelectedAnswerId] = useState(null)

    const onAnswerClick = (answerId) => {
        setSelectedAnswerId(answerId)
    }

    function submitAnswer() {
        toast({
            variant: "default",
            title: "hehehe",
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`mx-auto px-8 flex flex-col items-center justify-center h-full max-w-3xl text-start place-content-center gap-4 overflow-y-auto`}>
                <h1>test</h1>
            </motion.div>
        </AuthenticatedLayout>
    );
}
