import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { contractsData } from '../data/contracts';
import { toast } from '../components/ui/use-toast';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { FileText, FileType, Download } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';

const formSchema = z.object({
  firstPartyName: z.string().min(3, { message: "يجب أن يتكون اسم الطرف الأول من 3 أحرف على الأقل" }),
  firstPartyNationality: z.string().min(2, { message: "يرجى إدخال الجنسية" }),
  firstPartyAddress: z.string().min(5, { message: "يرجى إدخال عنوان صحيح" }),
  firstPartyID: z.string().min(5, { message: "يرجى إدخال رقم هوية صحيح" }),
  
  secondPartyName: z.string().min(3, { message: "يجب أن يتكون اسم الطرف الثاني من 3 أحرف على الأقل" }),
  secondPartyNationality: z.string().min(2, { message: "يرجى إدخال الجنسية" }),
  secondPartyAddress: z.string().min(5, { message: "يرجى إدخال عنوان صحيح" }),
  secondPartyID: z.string().min(5, { message: "يرجى إدخال رقم هوية صحيح" }),
  
  contractDate: z.string().min(1, { message: "يرجى تحديد تاريخ العقد" }),
  additionalTerms: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val, {
    message: "يجب الموافقة على الشروط والأحكام للمتابعة"
  })
});

type FormValues = z.infer<typeof formSchema>;

const CreateContract = () => {
  const { id } = useParams<{ id: string }>();
  const [contract, setContract] = useState(contractsData.find(c => c.id === id));
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstPartyName: "",
      firstPartyNationality: "مصري",
      firstPartyAddress: "",
      firstPartyID: "",
      secondPartyName: "",
      secondPartyNationality: "مصري",
      secondPartyAddress: "",
      secondPartyID: "",
      contractDate: new Date().toISOString().split('T')[0],
      additionalTerms: "",
      agreeToTerms: false
    }
  });
  
  const [isCreating, setIsCreating] = useState(false);

  if (!contract) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">عقد غير موجود</h1>
            <p className="text-gray-700 mb-8">
              لم نتمكن من العثور على العقد المطلوب. يرجى التحقق من الرابط أو العودة لقائمة العقود.
            </p>
            <Link 
              to="/" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center"
            >
              <i className="fas fa-arrow-right ml-2"></i>
              العودة ��لصفحة الرئيسية
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const onSubmit = (data: FormValues) => {
    setIsCreating(true);
    
    // في عالم حقيقي، سنرسل البيانات إلى الخادم لإنشاء العقد
    setTimeout(() => {
      toast({
        title: "تم إنشاء العقد بنجاح",
        description: "يمكنك الآن تنزيل العقد بصيغة Word أو PDF",
      });
      setIsCreating(false);
      // في تطبيق حقيقي، سنقوم بتوجيه المستخدم إلى صفحة العقد المُنشأ
      // هنا نقوم بمحاكاة ذلك
      navigate(`/contract/${id}?created=true`);
    }, 1500);
  };

  const downloadAsWord = () => {
    toast({
      title: "جاري التحميل",
      description: "جاري تحميل العقد بصيغة Word",
    });
    // في تطبيق حقيقي، هنا سيتم تنزيل الملف
  };

  const downloadAsPDF = () => {
    toast({
      title: "جاري التحميل",
      description: "جاري تحميل العقد بصيغة PDF",
    });
    // في تطبيق حقيقي، هنا سيتم تنزيل الملف
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className={`bg-${contract?.color}-600 h-2`}></div>
            <CardContent className="p-6 pt-6">
              <div className="mb-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <span className={`bg-${contract?.color}-100 text-${contract?.color}-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2 inline-block`}>
                      {contract?.categoryLabel}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800">إنشاء {contract?.title}</h1>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{contract?.description}</p>
              </div>

              <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded-sm mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <i className="fas fa-exclamation-triangle text-yellow-400"></i>
                  </div>
                  <div className="mr-3">
                    <p className="text-sm text-yellow-700">
                      يرجى التأكد من إدخال جميع البيانات بشكل صحيح. هذا نموذج استرشادي فقط ولا يغني عن استشارة محامٍ.
                    </p>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-medium mb-4">بيانات الطرف الأول</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstPartyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>اسم الطرف الأول</FormLabel>
                            <FormControl>
                              <Input placeholder="الاسم بالكامل" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="firstPartyNationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>الجنسية</FormLabel>
                            <FormControl>
                              <Input placeholder="الجنسية" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="firstPartyAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>عنوان الإقامة</FormLabel>
                            <FormControl>
                              <Input placeholder="العنوان بالتفصيل" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="firstPartyID"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>رقم الهوية/جواز السفر</FormLabel>
                            <FormControl>
                              <Input placeholder="رقم الهوية أو جواز السفر" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-medium mb-4">بيانات الطرف الثاني</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="secondPartyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>اسم الطرف الثاني</FormLabel>
                            <FormControl>
                              <Input placeholder="الاسم بالكامل" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="secondPartyNationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>الجنسية</FormLabel>
                            <FormControl>
                              <Input placeholder="الجنسية" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="secondPartyAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>عنوان الإقامة</FormLabel>
                            <FormControl>
                              <Input placeholder="العنوان بالتفصيل" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="secondPartyID"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>رقم الهوية/جواز السفر</FormLabel>
                            <FormControl>
                              <Input placeholder="رقم الهوية أو جواز السفر" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <h2 className="text-xl font-medium mb-4">بيانات العقد</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <FormField
                        control={form.control}
                        name="contractDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>تاريخ تحرير العقد</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="additionalTerms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>شروط خاصة (اختياري)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="يمكنك إضافة شروط خاصة إضافية للعقد" 
                                {...field} 
                                rows={4}
                              />
                            </FormControl>
                            <FormDescription>
                              أي شروط إضافية ستتم إضافتها إلى العقد في البنود الخاصة.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 space-x-reverse">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                أقر بأن البيانات المدخلة صحيحة وأوافق على الشروط والأحكام
                              </FormLabel>
                              <FormDescription>
                                سيتم إنشاء العقد وفقاً للبيانات المدخلة وسيكون ملزماً قانوناً.
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button type="submit" disabled={isCreating} className="bg-green-600 hover:bg-green-700 text-white">
                      <FileText className="ml-2 h-4 w-4" />
                      إنشاء العقد
                    </Button>
                    <Button 
                      type="button" 
                      onClick={downloadAsWord} 
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <FileType className="ml-2 h-4 w-4" />
                      تنزيل Word
                    </Button>
                    <Button 
                      type="button" 
                      onClick={downloadAsPDF} 
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50"
                    >
                      <FileType className="ml-2 h-4 w-4" />
                      تنزيل PDF
                    </Button>
                    <Link to="/">
                      <Button 
                        type="button" 
                        variant="outline"
                        className="border-gray-400 text-gray-700 hover:bg-gray-50"
                      >
                        إلغاء
                      </Button>
                    </Link>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateContract;
