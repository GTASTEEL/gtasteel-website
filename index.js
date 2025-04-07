import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function GTASteelWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Quote request sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send quote. Please try again later.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">GTA Steel</h1>
        <p className="text-lg text-gray-600">Toronto’s Trusted Steel Supplier</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Steel Sheets</h2>
            <p>Hot-rolled, cold-rolled, galvanized—available in all sizes and gauges.</p>
            <Button>Shop Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Steel Bars</h2>
            <p>Flat, round, and square bars ready for pickup or delivery.</p>
            <Button>Browse Bars</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Custom Orders</h2>
            <p>Need something specific? We’ll cut to size and fulfill custom specs.</p>
            <Button>Get a Quote</Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="What do you need a quote for?"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit">Send Request</Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            <Phone className="text-gray-500" />
            <span>+1 (416) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-gray-500" />
            <span>info@gtasteel.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-500" />
            <span>123 Steelway Blvd, Toronto, ON</span>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} GTA Steel. All rights reserved.
      </footer>
    </div>
  );
}
