export interface Course {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  category: string;
}

export interface StudentRegistration {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  coursePrice: string;
  experienceLevel: 'Principiante' | 'Intermedio' | 'Avanzado';
  goal?: string;
  registeredAt: string;
  status: 'Confirmado' | 'Pendiente de pago' | 'Completado';
}
