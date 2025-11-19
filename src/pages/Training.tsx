import { modules } from '@/data/modules';
import { ModuleCard } from '@/components/ModuleCard';

const Training = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meus Treinamentos</h1>
        <p className="text-muted-foreground mt-2">
          Complete os módulos de treinamento
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map(module => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Training;
