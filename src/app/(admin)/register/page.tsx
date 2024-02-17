import RegisterForm from '@/app/components/register/Register';

export interface IPage {}

export default function Register({}: IPage) {
  return (
    <div style={{ padding: '0 20px', backgroundColor: '#F9F9F9' }}>
      <RegisterForm />
    </div>
  );
}
