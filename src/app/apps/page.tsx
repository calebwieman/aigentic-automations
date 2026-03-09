"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

const apps = [
  // Communication (5)
  { name: "Slack", category: "Communication", color: "#4A154B", icon: "slack" },
  { name: "Microsoft Teams", category: "Communication", color: "#6264A7", icon: "teams" },
  { name: "Discord", category: "Communication", color: "#5865F2", icon: "discord" },
  { name: "Zoom", category: "Communication", color: "#2D8CFF", icon: "zoom" },
  { name: "Google Meet", category: "Communication", color: "#00897B", icon: "meet" },
  
  // Email (5)
  { name: "Gmail", category: "Email", color: "#EA4335", icon: "gmail" },
  { name: "Outlook", category: "Email", color: "#0078D4", icon: "outlook" },
  { name: "HubSpot", category: "Email", color: "#FF7A59", icon: "hubspot" },
  { name: "Mailchimp", category: "Email", color: "#FFE01B", icon: "mailchimp" },
  { name: "SendGrid", category: "Email", color: "#1A82E2", icon: "sendgrid" },
  
  // Productivity (5)
  { name: "Notion", category: "Productivity", color: "#000000", icon: "notion" },
  { name: "Asana", category: "Productivity", color: "#F06A6A", icon: "asana" },
  { name: "Trello", category: "Productivity", color: "#0079BF", icon: "trello" },
  { name: "Monday.com", category: "Productivity", color: "#FF3D57", icon: "monday" },
  { name: "ClickUp", category: "Productivity", color: "#7B68EE", icon: "clickup" },
  
  // CRM & Sales (5)
  { name: "Salesforce", category: "CRM", color: "#00A1E0", icon: "salesforce" },
  { name: "HubSpot CRM", category: "CRM", color: "#FF7A59", icon: "hubspot" },
  { name: "Pipedrive", category: "CRM", color: "#FF4618", icon: "pipedrive" },
  { name: "Zoho CRM", category: "CRM", color: "#EM4036", icon: "zoho" },
  { name: "Copper", category: "CRM", color: "#FFC80A", icon: "copper" },
  
  // Marketing (5)
  { name: "Meta Ads", category: "Marketing", color: "#0081FB", icon: "meta" },
  { name: "Google Ads", category: "Marketing", color: "#4285F4", icon: "google" },
  { name: "LinkedIn Ads", category: "Marketing", color: "#0A66C2", icon: "linkedin" },
  { name: "TikTok Ads", category: "Marketing", color: "#EE1D52", icon: "tiktok" },
  { name: "Buffer", category: "Marketing", color: "#231F20", icon: "buffer" },
  
  // E-commerce (5)
  { name: "Shopify", category: "E-commerce", color: "#96BF48", icon: "shopify" },
  { name: "WooCommerce", category: "E-commerce", color: "#96588A", icon: "woocommerce" },
  { name: "BigCommerce", category: "E-commerce", color: "#1D2328", icon: "bigc" },
  { name: "Squarespace", category: "E-commerce", color: "#000000", icon: "squarespace" },
  { name: "Wix", category: "E-commerce", color: "#0C6EF2", icon: "wix" },
  
  // Payments (5)
  { name: "Stripe", category: "Payments", color: "#635BFF", icon: "stripe" },
  { name: "PayPal", category: "Payments", color: "#003087", icon: "paypal" },
  { name: "Square", category: "Payments", color: "#006AFF", icon: "square" },
  { name: "Braintree", category: "Payments", color: "#31BEF2", icon: "braintree" },
  { name: "Razorpay", category: "Payments", color: "#3399CC", icon: "razorpay" },
  
  // Databases (5)
  { name: "Google Sheets", category: "Database", color: "#34A853", icon: "sheets" },
  { name: "Excel", category: "Database", color: "#217346", icon: "excel" },
  { name: "Airtable", category: "Database", color: "#FCB400", icon: "airtable" },
  { name: "PostgreSQL", category: "Database", color: "#336791", icon: "postgres" },
  { name: "MongoDB", category: "Database", color: "#47A248", icon: "mongodb" },
  
  // Developer Tools (5)
  { name: "GitHub", category: "Developer", color: "#181717", icon: "github" },
  { name: "GitLab", category: "Developer", color: "#FC6D26", icon: "gitlab" },
  { name: "Jira", category: "Developer", color: "#0052CC", icon: "jira" },
  { name: "Vercel", category: "Developer", color: "#000000", icon: "vercel" },
  { name: "Docker", category: "Developer", color: "#2496ED", icon: "docker" },
  
  // AI (5)
  { name: "OpenAI", category: "AI", color: "#10A37F", icon: "openai" },
  { name: "Anthropic", category: "AI", color: "#D57977", icon: "anthropic" },
  { name: "Google Gemini", category: "AI", color: "#8AB4F8", icon: "gemini" },
  { name: "Microsoft Copilot", category: "AI", color: "#00A4EF", icon: "copilot" },
  { name: "Hugging Face", category: "AI", color: "#FFD700", icon: "huggingface" },
  
  // Automation (5)
  { name: "Zapier", category: "Automation", color: "#FF4F00", icon: "zapier" },
  { name: "Make", category: "Automation", color: "#2F4192", icon: "make" },
  { name: "Pabbly", category: "Automation", color: "#4C4C4C", icon: "pabbly" },
  { name: "Automate.io", category: "Automation", color: "#4F46E5", icon: "automate" },
  { name: "Workato", category: "Automation", color: "#FF6B35", icon: "workato" },
  
  // Social Media (5)
  { name: "Twitter/X", category: "Social", color: "#000000", icon: "twitter" },
  { name: "Instagram", category: "Social", color: "#E4405F", icon: "instagram" },
  { name: "LinkedIn", category: "Social", color: "#0A66C2", icon: "linkedin" },
  { name: "YouTube", category: "Social", color: "#FF0000", icon: "youtube" },
  { name: "Facebook", category: "Social", color: "#1877F2", icon: "facebook" },
];

function AppIcon({ name, color, icon }: { name: string; color: string; icon: string }) {
  // Minimalist icon paths for each app
  const icons: Record<string, JSX.Element> = {
    slack: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/></svg>,
    teams: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="8" r="4"/><circle cx="6" cy="14" r="3"/><circle cx="18" cy="14" r="3"/></svg>,
    discord: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>,
    zoom: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="21" y1="3" x2="15" y2="3"/><line x1="21" y1="21" x2="15" y2="21"/></svg>,
    meet: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>,
    gmail: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>,
    outlook: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    hubspot: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>,
    mailchimp: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3c-2 2-3 5-3 9s1 7 3 9M12 3c2 2 3 5 3 9s-1 7-3 9"/></svg>,
    sendgrid: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/><path d="M8 10v4M16 10v4"/></svg>,
    notion: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/></svg>,
    asana: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v6M18 9v6M9 6h6M9 18h6"/></svg>,
    trello: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
    monday: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>,
    clickup: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"/></svg>,
    salesforce: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3c2.5 2 4 5 4 9s-1.5 7-4 9"/></svg>,
    pipedrive: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 9v6M18 9v6"/></svg>,
    zoho: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/></svg>,
    copper: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/></svg>,
    meta: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    google: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7V3M12 21v-4M21 12h-4M7 12H3"/></svg>,
    linkedin: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 12v7M7 9V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7M11 18v-4"/></svg>,
    tiktok: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>,
    buffer: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="8" r="2"/><circle cx="12" cy="16" r="2"/></svg>,
    shopify: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4 4l4 16h4l4-16-4-4h-4l-4 4z"/></svg>,
    woocommerce: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/></svg>,
    bigc: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>,
    squarespace: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
    wix: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12c0-2 2-4 4-4s4 2 4 4"/></svg>,
    stripe: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.939 3.483 1.612 3.483 2.64 0 .9-.77 1.442-2.189 1.442-1.927 0-4.965-.93-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/></svg>,
    paypal: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/></svg>,
    square: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>,
    braintree: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>,
    razorpay: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4 4l16 16M4 20L20 4"/></svg>,
    sheets: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>,
    excel: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/></svg>,
    airtable: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>,
    postgres: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"/></svg>,
    mongodb: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 2C8 2 4 4 4 7c0 2 2 4 4 5 0 2-2 3-2 5 0 1 2 2 6 2s6-1 6-2c0-2-2-3-2-5 2-1 4-3 4-5 0-3-4-5-8-5z"/></svg>,
    github: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M16 8v-2a4 4 0 0 0-8 0v8M8 16c0-2 2-4 4-4s4 2 4 4"/></svg>,
    gitlab: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 3l8 4v6l-8 5-8-5v-6l8-4z"/></svg>,
    jira: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v3M18 9v3M9 6h6M9 15h6"/></svg>,
    vercel: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 2L2 22h20L12 2z"/></svg>,
    docker: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="6" r="4"/><circle cx="6" cy="18" r="4"/><circle cx="18" cy="18" r="4"/><path d="M12 10v4M6 14v4M18 14v4"/></svg>,
    openai: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12c0-2 2-4 4-4M16 12c0 2-2 4-4 4M12 8c2 0 4 2 4 4"/></svg>,
    anthropic: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>,
    gemini: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 4v4M12 16v4M4 12h4M16 12h4"/></svg>,
    copilot: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z"/></svg>,
    huggingface: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12c0-2 2-4 4-4M16 12c0 2-2 4-4 4M12 8c2 0 4 2 4 4"/></svg>,
    zapier: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></svg>,
    make: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="8" r="2"/><circle cx="19" cy="8" r="2"/><circle cx="5" cy="16" r="2"/><circle cx="19" cy="16" r="2"/><path d="M7 8h10M7 16h10"/></svg>,
    pabbly: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/></svg>,
    automate: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>,
    workato: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>,
    twitter: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.4-6.4M20 4l-6.4 6.4"/></svg>,
    instagram: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1"/></svg>,
    youtube: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></svg>,
    facebook: <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 12h6M9 9V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v7"/></svg>,
  };

  const iconEl = icons[icon];
  if (iconEl) {
    return (
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color + "20" }}
      >
        <div className="w-6 h-6">{iconEl}</div>
      </div>
    );
  }
  
  // Fallback to initials
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
  return (
    <div 
      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

export default function AppsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [...new Set(apps.map(app => app.category))];
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Aigentic Automations</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-col