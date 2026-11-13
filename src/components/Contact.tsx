import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'Telegram', href: 'https://t.me/bitcoinclubmalta', label: 'Join the chat' },
  { name: 'Twitter/X', href: 'https://twitter.com/bitcoinclubmt', label: 'Follow updates' },
  { name: 'Email', href: 'mailto:info@bitcoinclubmalta.com', label: 'info@bitcoinclubmalta.com' },
  { name: 'Facebook', href: 'https://www.facebook.com/bitcoinmalta', label: 'Join community' },
];

const volunteerRoles = [
  { role: 'Community Lead', description: 'Coordinate events, manage volunteers', status: 'Open' },
  { role: 'Content Lead', description: 'Social media, newsletter, press', status: 'Open' },
  { role: 'Education Lead', description: 'Workshops, courses, curriculum', status: 'Open' },
  { role: 'Merchant Lead', description: 'Business outreach, onboarding', status: 'Filled' },
  { role: 'Tech Lead', description: 'Website, app development', status: 'Open' },
  { role: 'Policy Lead', description: 'Government relations, advocacy', status: 'Open' },
];

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent',
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', interest: '', message: '' });
  };

  return (
    <section id="contact" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Get Involved</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Join the Mission
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Ready to help make Malta a Bitcoin Island? Whether you want to join, volunteer, or partner—let's talk.
        </p>
      </div>

      {/* Social Links */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Ways to Connect</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-6 hover:bg-secondary transition-colors"
            >
              <div className="font-medium mb-1">{link.name}</div>
              <div className="text-sm text-muted-foreground">{link.label}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Volunteer Roles */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Volunteer Opportunities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {volunteerRoles.map((role) => (
            <div key={role.role} className="bg-background p-6 flex items-start justify-between">
              <div>
                <div className="font-medium mb-1">{role.role}</div>
                <div className="text-sm text-muted-foreground">{role.description}</div>
              </div>
              <span className={`text-xs uppercase tracking-wider ${role.status === 'Filled' ? 'text-muted-foreground' : ''}`}>
                {role.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h3 className="font-heading text-2xl mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">I'm interested in...</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                >
                  <option value="">Select an option</option>
                  <option value="member">Becoming a Member</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="merchant">Merchant Partnership</option>
                  <option value="corporate">Corporate Membership</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="press">Press/Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                />
              </div>
              <Button variant="outline" type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div className="border border-border p-8">
              <h4 className="font-heading text-xl mb-4">Based in Malta</h4>
              <p className="text-sm text-muted-foreground">
                We meet across the island—Sliema, Valletta, St. Julian's, and beyond. Check our events calendar for locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}