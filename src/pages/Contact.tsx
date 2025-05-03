import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
const Contact = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50">
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
                        <p className="text-gray-600"> القاهره</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">الاسم</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">الرسالة</label>
                      <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                    </div>
                    <Button className="w-full">
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
    </div>;
};
export default Contact;