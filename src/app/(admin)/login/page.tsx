import LoginForm from "@/app/components/login/Login";

export interface IPage {}

export default function Login({}: IPage) {
  return (
    <div style={{ padding: '0 20px', backgroundColor: '#F9F9F9' }}>
      <LoginForm />
    </div>
  );
}
