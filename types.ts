import React from 'react';

// Added React import to resolve namespace issues for ReactNode
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  hectares: string;
  issue: string;
  contactMethod: string;
}