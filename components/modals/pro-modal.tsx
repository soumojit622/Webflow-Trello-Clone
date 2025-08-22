"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useProModal } from "@/hooks/use-pro-modal";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";

import { Layout, CheckSquare, Shield, Star } from "lucide-react";

export const ProModal = () => {
  const proModal = useProModal();

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
      toast.loading("Redirecting to checkout...");
    },
    onError: (error) => toast.error(error),
  });

  const onClick = () => execute({});

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="max-w-md rounded-xl shadow-xl overflow-hidden p-0">
        <DialogTitle className="sr-only">Upgrade to Webflow Pro</DialogTitle>

        {/* Hero Image */}
        <div className="relative w-full aspect-video">
          <Image src="/hero.svg" alt="Upgrade illustration" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">
            Upgrade to Webflow Pro Today!
          </h2>
          <p className="text-sm text-gray-600">
            Unlock advanced features and streamline your workflow.
          </p>

          {/* Features List with icons */}
          <ul className="flex flex-col items-start gap-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Layout className="w-5 h-5 text-blue-500" />
              Unlimited boards
            </li>
            <li className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-blue-500" />
              Advanced checklists
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Admin & security features
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-500" />
              Priority support & more
            </li>
          </ul>

          {/* Upgrade Button */}
          <Button
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            onClick={onClick}
            disabled={isLoading}
          >
            Upgrade Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
