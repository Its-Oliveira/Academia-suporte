import { modules } from '@/data/modules';
import { ModuleCard } from '@/components/ModuleCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Training = () => {
  const level1Modules = modules.filter(m => m.level === 1);
  const level2Modules = modules.filter(m => m.level === 2);
  const level3Modules = modules.filter(m => m.level === 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Meus Treinamentos</h1>
        <p className="text-muted-foreground mt-2">
          Complete os módulos de cada nível para progredir
        </p>
      </div>

      <Tabs defaultValue="level1" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="level1">Nível 1</TabsTrigger>
          <TabsTrigger value="level2" disabled>Nível 2</TabsTrigger>
          <TabsTrigger value="level3" disabled>Nível 3</TabsTrigger>
        </TabsList>

        <TabsContent value="level1" className="space-y-4 mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Nível 1 - Básico</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Fundamentos da plataforma
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {level1Modules.map(module => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="level2" className="space-y-4 mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Nível 2 - Intermediário</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Operações avançadas (Bloqueado - Complete o Nível 1)
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {level2Modules.map(module => (
              <ModuleCard key={module.id} module={module} isLocked />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="level3" className="space-y-4 mt-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Nível 3 - Avançado</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Troubleshooting e casos complexos (Bloqueado - Complete o Nível 2)
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {level3Modules.map(module => (
              <ModuleCard key={module.id} module={module} isLocked />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Training;
