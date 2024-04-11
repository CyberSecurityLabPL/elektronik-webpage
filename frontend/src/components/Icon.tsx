import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

export type IconColors = "blue" | "red" | "amber" | "green" | "slate"


export default function IconComponent({ icon: Icon, color }: { icon: React.FC<LucideProps>, color: IconColors }) {
    return (
        <div className={cn({
            "bg-blue-500/25 text-blue-600": color === "blue",
            "bg-red-500/25 text-red-600": color === "red",
            "bg-amber-500/25 text-amber-600": color === "amber",
            "bg-green-500/25 text-green-600": color === "green",
            "bg-slate-500/25 text-slate-600": color === "slate"
        },"rounded-lg p-1")} >
            <Icon className={`h-8 w-8 rounded-lg`} />
        </div>
    )
}
