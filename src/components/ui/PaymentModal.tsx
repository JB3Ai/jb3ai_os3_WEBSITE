import React, { useEffect, useState } from 'react';
import { X, CreditCard, Globe, Link2, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export type PaymentMethod = 'PayFast' | 'Stripe' | 'PayPalDonate' | 'PayPalPayLater' | 'Crypto';

export interface PaymentTier {
  id: string;
  title: string;
  costZAR: string;
  costUSD: string;
  details: string;
  actionLabel: string;
}

interface PaymentModalProps {
  isOpen: boolean;
  tier?: PaymentTier | null;
  onClose: () => void;
}

const PAYMENT_URLS: Record<Exclude<PaymentMethod, 'Crypto'>, string> = {
  PayFast: 'https://www.payfast.co.za/',
  Stripe: 'https://stripe.com/pay',
  PayPalDonate: 'https://paypal.me/jonoblackburnza',
  PayPalPayLater: 'https://www.paypal.com/paypalme/jonoblackburnza?country.x=ZA&locale.x=en_ZA',
};

const CRYPTO_ADDRESS = '0x1234...ABCD';

export function PaymentModal({ isOpen, tier, onClose }: PaymentModalProps) {
  const [method, setMethod] = useState<PaymentMethod>('PayFast');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMethod('PayFast');
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen || !tier) {
    return null;
  }

  const handleConfirm = () => {
    if (method === 'Crypto') {
      return;
    }

    const url = PAYMENT_URLS[method];
    window.open(url, '_blank', 'noopener');
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CRYPTO_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-3xl border border-white/10 bg-[#090909] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400">Sponsorship Checkout</p>
            <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white">{tier.title}</h2>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-2xl">{tier.details}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-cyan-500/10 bg-white/5 p-5">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">Cost</p>
            <p className="mt-3 text-3xl font-bold text-white">{tier.costZAR}</p>
            <p className="text-sm text-gray-400">{tier.costUSD} USD</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">Select Payment Method</p>
            <div className="mt-4 space-y-3">
              {(['PayFast', 'Stripe', 'PayPalDonate', 'PayPalPayLater', 'Crypto'] as PaymentMethod[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMethod(option)}
                  className={`w-full border px-4 py-3 text-left text-sm transition ${method === option ? 'border-cyan-400 bg-cyan-500/10 text-white' : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'}`}
                >
                  <span className="flex items-center gap-3">
                    {option === 'PayFast' && <ShieldCheck className="w-4 h-4" />}
                    {option === 'Stripe' && <CreditCard className="w-4 h-4" />}
                    {(option === 'PayPalDonate' || option === 'PayPalPayLater') && <Globe className="w-4 h-4" />}
                    {option === 'Crypto' && <Link2 className="w-4 h-4" />}
                    <span>{option === 'PayPalDonate' ? 'PayPal Donate' : option === 'PayPalPayLater' ? 'PayPal Pay Later' : option}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="border border-white/10 bg-white/5 p-5">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-400">Payment Details</p>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              {method === 'Crypto' ? (
                <>
                  <p className="font-semibold text-white">Wallet Address</p>
                  <div className="border border-white/10 bg-[#0c0c0c] p-4 text-xs font-mono text-green-300 break-all">
                    {CRYPTO_ADDRESS}
                  </div>
                  <Button variant="secondary" type="button" onClick={handleCopyAddress} className="w-full">
                    {copied ? 'Address Copied' : 'Copy Wallet Address'}
                  </Button>
                </>
              ) : (
                <>
                  <p className="font-semibold text-white">Hosted checkout</p>
                  <p className="text-gray-500">Opens the selected payment provider in a new tab.</p>
                  <p className="text-xs text-gray-500 pt-2">This is a secure paywall handler for sponsorship contributions and Isikolo AI support.</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Choose the method that matches your region and contribution type.</p>
          <div className="flex flex-wrap gap-3">
            {method !== 'Crypto' && (
              <Button variant="primary" onClick={handleConfirm}>
                Continue with {method === 'PayPalDonate' ? 'PayPal Donate' : method === 'PayPalPayLater' ? 'PayPal Pay Later' : method}
              </Button>
            )}
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
