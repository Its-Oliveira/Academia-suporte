import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Download, Search } from 'lucide-react';
import { useState } from 'react';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock documents data
  const documents = [
    {
      id: '1',
      title: 'Manual Completo da Plataforma',
      moduleTitle: 'Geral',
      fileName: 'manual-completo.pdf',
      uploadDate: '2024-01-15',
    },
    {
      id: '2',
      title: 'Guia de Importação de Planilhas',
      moduleTitle: 'Módulo 1',
      fileName: 'guia-importacao.pdf',
      uploadDate: '2024-01-10',
    },
    {
      id: '3',
      title: 'Exemplos de Composições',
      moduleTitle: 'Módulo 2',
      fileName: 'exemplos-composicoes.pdf',
      uploadDate: '2024-01-12',
    },
    {
      id: '4',
      title: 'Catálogo de Insumos SINAPI',
      moduleTitle: 'Módulo 3',
      fileName: 'catalogo-sinapi.pdf',
      uploadDate: '2024-01-08',
    },
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.moduleTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Biblioteca de Documentos</h1>
        <p className="text-muted-foreground mt-2">
          Acesse manuais, guias e materiais de apoio
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar documentos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg mt-2">{doc.title}</CardTitle>
              <CardDescription>{doc.moduleTitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>Arquivo: {doc.fileName}</p>
                <p>Upload: {new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button size="sm" className="flex-1">
                  Visualizar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Nenhum documento encontrado</h3>
          <p className="text-muted-foreground">
            Tente ajustar sua busca
          </p>
        </div>
      )}
    </div>
  );
};

export default Library;
