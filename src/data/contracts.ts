import { ContractType } from '../components/ContractCard';

export const contractsData: ContractType[] = [
  // Civil Contracts
  {
    id: 'civil-1',
    title: 'عقد بيع عقار',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد نقل ملكية عقار من البائع إلى المشتري مقابل ثمن محدد، وفقاً للقوانين المصرية.',
    color: 'green'
  },
  {
    id: 'civil-2',
    title: 'عقد هبة',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد تنازل عن ملكية مال من الواهب إلى الموهوب له دون مقابل، وفقاً للقانون المدني المصري.',
    color: 'green'
  },
  {
    id: 'civil-3',
    title: 'عقد وكالة عامة',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد تفويض من الموكل للوكيل للقيام بأعمال قانونية نيابة عنه في كافة المعاملات.',
    color: 'green'
  },
  {
    id: 'civil-4',
    title: 'عقد وكالة خاصة',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد تفويض من الموكل للوكيل للقيام بأعمال قانونية محددة نيابة عنه.',
    color: 'green'
  },
  {
    id: 'civil-5',
    title: 'عقد قرض',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد يلتزم بموجبه المقرض بتقديم مبلغ مالي للمقترض على أن يرده في وقت محدد.',
    color: 'green'
  },
  {
    id: 'civil-6',
    title: 'عقد صلح',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد ينهي به الطرفان نزاعاً قائماً بينهما أو يتوقيان به نزاعاً محتملاً.',
    color: 'green'
  },
  {
    id: 'civil-7',
    title: 'عقد رهن حيازي',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد ينقل بموجبه المدين حيازة منقول إلى الدائن ضماناً لدين.',
    color: 'green'
  },
  {
    id: 'civil-8',
    title: 'عقد رهن رسمي',
    category: 'civil',
    categoryLabel: 'العقود المدنية',
    description: 'عقد يكسب به الدائن حقاً عينياً على عقار مملوك للمدين لضمان الوفاء بالدين.',
    color: 'green'
  },

  // Commercial Contracts
  {
    id: 'commercial-1',
    title: 'عقد توريد',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يلتزم بموجبه المورد بتوريد سلع أو خدمات خلال فترة زمنية محددة مقابل ثمن.',
    color: 'blue'
  },
  {
    id: 'commercial-2',
    title: 'عقد وكالة تجارية',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يخول الوكيل التجاري حق تمثيل الموكل في تسويق وبيع منتجاته وخدماته.',
    color: 'blue'
  },
  {
    id: 'commercial-3',
    title: 'عقد امتياز تجاري (فرانشايز)',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يمنح بموجبه مالك حقوق الامتياز حق استخدام علامته التجارية ونظام عمله للممنوح له.',
    color: 'blue'
  },
  {
    id: 'commercial-4',
    title: 'عقد توزيع',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يمنح بموجبه المنتج حق توزيع منتجاته للموزع في منطقة جغرافية محددة.',
    color: 'blue'
  },
  {
    id: 'commercial-5',
    title: 'عقد وساطة تجارية',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يتعهد بموجبه الوسيط بالبحث عن طرف ثاني لإبرام صفقة مع موكله مقابل عمولة.',
    color: 'blue'
  },
  {
    id: 'commercial-6',
    title: 'عقد نقل بضائع',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يتعهد بموجبه الناقل بنقل بضائع من مكان إلى آخر مقابل أجر محدد.',
    color: 'blue'
  },
  {
    id: 'commercial-7',
    title: 'عقد تأمين تجاري',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يلتزم بموجبه المؤمن بتعويض المؤمن له عن خسارة محتملة مقابل قسط تأمين.',
    color: 'blue'
  },
  {
    id: 'commercial-8',
    title: 'عقد تخزين بضائع',
    category: 'commercial',
    categoryLabel: 'العقود التجارية',
    description: 'عقد يلتزم بموجبه مالك المخزن بحفظ بضائع المودع لديه مقابل أجر محدد.',
    color: 'blue'
  },

  // Employment Contracts
  {
    id: 'employment-1',
    title: 'عقد عمل محدد المدة',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل لفترة زمنية محددة وفقاً لقانون العمل المصري.',
    color: 'purple'
  },
  {
    id: 'employment-2',
    title: 'عقد عمل غير محدد المدة',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل مفتوح المدة وفقاً لأحكام قانون العمل المصري.',
    color: 'purple'
  },
  {
    id: 'employment-3',
    title: 'عقد عمل بدوام جزئي',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل لساعات عمل محددة أقل من ساعات العمل الكاملة.',
    color: 'purple'
  },
  {
    id: 'employment-4',
    title: 'عقد عمل تحت التجربة',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل لفترة تجريبية محددة يتم خلالها تقييم أداء العامل.',
    color: 'purple'
  },
  {
    id: 'employment-5',
    title: 'عقد عمل للمديرين التنفيذيين',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل خاص بالمديرين التنفيذيين وكبار الموظفين يتضمن بنوداً خاصة.',
    color: 'purple'
  },
  {
    id: 'employment-6',
    title: 'عقد عمل عن بعد',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل للعمل من خارج مقر الشركة (العمل عن بعد) مع تحديد الشروط والالتزامات.',
    color: 'purple'
  },
  {
    id: 'employment-7',
    title: 'عقد تدريب مهني',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد لتدريب متدرب على مهنة أو حرفة معينة لفترة محددة.',
    color: 'purple'
  },
  {
    id: 'employment-8',
    title: 'عقد عمل موسمي',
    category: 'employment',
    categoryLabel: 'عقود العمل',
    description: 'عقد عمل لفترة موسمية محددة مرتبطة بنشاط معين.',
    color: 'purple'
  },

  // Rent Contracts
  {
    id: 'rent-1',
    title: 'عقد إيجار سكني قديم',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار سكني خاضع لقانون الإيجارات القديم (قانون 49 لسنة 1977).',
    color: 'yellow'
  },
  {
    id: 'rent-2',
    title: 'عقد إيجار سكني جديد',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار سكني خاضع للقانون المدني والقانون 4 لسنة 1996.',
    color: 'yellow'
  },
  {
    id: 'rent-3',
    title: 'عقد إيجار تجاري',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار خاص بالمحلات والمنشآت التجارية وفقاً للقوانين المصرية.',
    color: 'yellow'
  },
  {
    id: 'rent-4',
    title: 'عقد إيجار إداري',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار خاص بالمكاتب والمقرات الإدارية وفقاً للقوانين المصرية.',
    color: 'yellow'
  },
  {
    id: 'rent-5',
    title: 'عقد إيجار مفروش',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار وحدة سكنية مفروشة بالأثاث والأجهزة لفترة محددة.',
    color: 'yellow'
  },
  {
    id: 'rent-6',
    title: 'عقد إيجار أرض زراعية',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار خاص بالأراضي الزراعية وفقاً لقانون الإصلاح الزراعي المصري.',
    color: 'yellow'
  },
  {
    id: 'rent-7',
    title: 'عقد إيجار سيارة',
    category: 'rent',
    categoryLabel: 'عقود الإيجار',
    description: 'عقد إيجار سيارة لفترة محددة مع تحديد الشروط والالتزامات.',
    color: 'yellow'
  },
  
  // Companies Contracts - Add 7 contracts here
  {
    id: 'companies-1',
    title: 'عقد تأسيس شركة تضامن',
    category: 'companies',
    categoryLabel: 'عقود الشركات',
    description: 'عقد تأسيس شركة تضامن وفقاً لقانون الشركات المصري.',
    color: 'red'
  },
  {
    id: 'companies-2',
    title: 'عقد تأسيس شركة ذات مسؤولية محدودة',
    category: 'companies',
    categoryLabel: 'عقود الشركات',
    description: 'عقد تأسيس شركة ذات مسؤولية محدودة وفقاً للقوانين المصرية.',
    color: 'red'
  },
  {
    id: 'companies-3',
    title: 'عقد تأسيس شركة مساهمة',
    category: 'companies',
    categoryLabel: 'عقود الشركات',
    description: 'عقد تأسيس شركة مساهمة مصرية وفقاً لقانون الشركات.',
    color: 'red'
  },

  // Confidentiality Contracts - Add 4 contracts here
  {
    id: 'confidentiality-1',
    title: 'اتفاقية سرية معلومات',
    category: 'confidentiality',
    categoryLabel: 'اتفاقيات السرية',
    description: 'اتفاقية للحفاظ على سرية المعلومات السرية المتبادلة بين الأطراف.',
    color: 'pink'
  },
  {
    id: 'confidentiality-2',
    title: 'اتفاقية عدم إفشاء معلومات',
    category: 'confidentiality',
    categoryLabel: 'اتفاقيات السرية',
    description: 'اتفاقية تمنع الموظف أو المتعاقد من إفشاء معلومات الشركة السرية.',
    color: 'pink'
  },

  // Sales Contracts - Add 4 contracts here
  {
    id: 'sales-1',
    title: 'عقد بيع سيارة',
    category: 'sales',
    categoryLabel: 'عقود البيع',
    description: 'عقد نقل ملكية سيارة من البائع إلى المشتري مقابل ثمن محدد.',
    color: 'indigo'
  },
  {
    id: 'sales-2',
    title: 'عقد بيع أثاث',
    category: 'sales',
    categoryLabel: 'عقود البيع',
    description: 'عقد بيع أثاث منزلي أو مكتبي من البائع إلى المشتري.',
    color: 'indigo'
  },

  // Other Contracts - Add 4 contracts here
  {
    id: 'other-1',
    title: 'عقد مقاولة',
    category: 'other',
    categoryLabel: 'عقود أخرى',
    description: 'عقد يتعهد بمقتضاه المقاول بتنفيذ عمل معين للطرف الآخر مقابل أجر.',
    color: 'gray'
  },
  {
    id: 'other-2',
    title: 'عقد صيانة',
    category: 'other',
    categoryLabel: 'عقود أخرى',
    description: 'عقد يتعهد بمقتضاه طرف بصيانة أجهزة أو معدات الطرف الآخر مقابل مبلغ محدد.',
    color: 'gray'
  }
];
