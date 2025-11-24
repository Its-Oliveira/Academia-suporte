import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ChecklistItem } from '@/types/training';
import { Progress } from '@/components/ui/progress';

interface ChecklistSectionProps {
  title: string;
  subtitle: string;
  items: ChecklistItem[];
  onItemToggle: (itemId: string) => void;
}

export function ChecklistSection({ title, subtitle, items, onItemToggle }: ChecklistSectionProps) {
  const completedCount = items.filter(item => item.completed).length;
  const progressPercentage = (completedCount / items.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{subtitle}</CardDescription>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Progresso</span>
            <span className="font-medium">{completedCount}/{items.length} concluídos</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Checkbox
              id={item.id}
              checked={item.completed || false}
              onCheckedChange={() => onItemToggle(item.id)}
              className="mt-1"
            />
            <label
              htmlFor={item.id}
              className={`flex-1 cursor-pointer text-sm leading-relaxed ${
                item.completed ? 'line-through text-muted-foreground' : 'text-foreground'
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
