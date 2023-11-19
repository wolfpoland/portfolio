import { AuthControls } from "patryk/app/auth/(components)/auth-controls";
import { Card, CardContent, CardHeader } from "patryk/components/ui/card";

export default async function Auth() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>Auth</CardHeader>
        <CardContent>
          <AuthControls />
        </CardContent>
      </Card>
    </div>
  );
}
