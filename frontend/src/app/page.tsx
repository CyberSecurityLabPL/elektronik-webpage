"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center gap-4 ">
      <div className="w-4/5 ">

      <Card variant={'glass'}>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      </div>
      
    </main>
  );
}
