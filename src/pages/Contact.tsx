
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { PhoneCall, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';
import { Input } from '../components/ui/input';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من وجود بيانات
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }
    
    // تجهيز النص المراد إرساله
    const messageText = `مرحبًا، أريد الحصول على عقد من منصه جرين لايت.\n\nالاسم: ${formData.name}\nالبريد الإلكتروني: ${formData.email}\nرقم الهاتف: ${formData.phone}\nالرسالة: ${formData.message}`;
    
    // تشفير النص للاستخدام في الرابط
    const encodedMessage = encodeURIComponent(messageText);
    
    // فتح رابط واتساب
    const whatsappUrl = `https://wa.me/201281343893?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // عرض رسالة نجاح
    toast({
      title: "تم إرسال الرسالة",
      description: "سيتم التواصل معك قريباً عبر واتساب",
    });
    
    // إعادة تعيين النموذج
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">اتصل بنا</h1>
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <PhoneCall className="ml-3 text-green-600" />
                      <div>
                        <p className="font-semibold">الهاتف</p>
                        <p className="text-gray-600">⁦+20 12 81343893⁩</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="ml-3 text-green-600" />
                      <div>
                        <p className="font-semibold">البريد الإلكتروني</p>
                        <p className="text-gray-600">mantan0002012@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="ml-3 text-green-600" />
                      <div>
                        <p className="font-semibold">العنوان</p>
                        <p className="text-gray-600"> القاهره</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-gray-700 mb-1">الاسم</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">رقم الهاتف</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        placeholder="مثال: 01XXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">الرسالة</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      </textarea>
                    </div>
                    <Button type="submit" className="w-full flex items-center justify-center">
                      <Send className="ml-2 h-4 w-4" />
                      إرسال
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
