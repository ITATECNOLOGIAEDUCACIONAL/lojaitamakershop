
import React, { useState, useRef } from 'react';
import { PrintProduct, initialProducts } from '@/data/3dPrintProducts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Pencil, Trash2, Save, Upload, Image } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

export const AdminProductManagement = () => {
  const [products, setProducts] = useState<PrintProduct[]>(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  
  const [newProduct, setNewProduct] = useState<Omit<PrintProduct, 'id'>>({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  });

  const [editingProduct, setEditingProduct] = useState<PrintProduct | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);
  
  const saveProducts = (updatedProducts: PrintProduct[]) => {
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.description || newProduct.price <= 0) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    const id = `3d-${Date.now()}`;
    const productToAdd = { ...newProduct, id };
    
    const updatedProducts = [...products, productToAdd];
    saveProducts(updatedProducts);
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
    });
    setOpenDialog(false);
    toast.success('Produto adicionado com sucesso!');
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      saveProducts(updatedProducts);
      toast.success('Produto excluído com sucesso!');
    }
  };

  const handleEditProduct = (product: PrintProduct) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = () => {
    if (!editingProduct) return;
    
    const updatedProducts = products.map(product => 
      product.id === editingProduct.id ? editingProduct : product
    );
    
    saveProducts(updatedProducts);
    setEditingProduct(null);
    toast.success('Produto atualizado com sucesso!');
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (isEdit && editingProduct) {
        setEditingProduct({...editingProduct, imageUrl: base64String});
      } else {
        setNewProduct({...newProduct, imageUrl: base64String});
      }
      toast.success('Imagem carregada com sucesso!');
    };
    reader.readAsDataURL(file);
  };
  
  const triggerFileInput = (isEdit: boolean = false) => {
    if (isEdit) {
      editFileInputRef.current?.click();
    } else {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Produto</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome do Produto</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="Nome do produto"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Preço (R$)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                  placeholder="Preço"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="imageUpload">Imagem do Produto</Label>
                <div className="flex items-center gap-2">
                  <Input
                    ref={fileInputRef}
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e)}
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => triggerFileInput()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Selecionar Imagem
                  </Button>
                  {newProduct.imageUrl && <span className="text-green-600 text-sm">Imagem selecionada</span>}
                </div>
                {newProduct.imageUrl && (
                  <div className="mt-2 border rounded p-2">
                    <img 
                      src={newProduct.imageUrl} 
                      alt="Preview" 
                      className="max-h-40 mx-auto object-contain" 
                    />
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  placeholder="Descrição do produto"
                  rows={4}
                />
              </div>
              <Button onClick={handleAddProduct}>Adicionar Produto</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="aspect-video w-full overflow-hidden">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Image className="h-12 w-12 text-gray-400" />
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle>
                {editingProduct?.id === product.id ? (
                  <Input
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                ) : (
                  product.name
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {editingProduct?.id === product.id ? (
                  <>
                    <div>
                      <Label htmlFor={`price-${product.id}`}>Preço (R$)</Label>
                      <Input
                        id={`price-${product.id}`}
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                        min="0"
                        step="0.01"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`image-${product.id}`}>Imagem do Produto</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          ref={editFileInputRef}
                          id={`image-${product.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, true)}
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => triggerFileInput(true)}
                          className="flex items-center gap-2 w-full"
                        >
                          <Upload className="h-4 w-4" />
                          Atualizar Imagem
                        </Button>
                      </div>
                      {editingProduct.imageUrl && (
                        <div className="mt-2 border rounded p-2">
                          <img 
                            src={editingProduct.imageUrl} 
                            alt="Preview" 
                            className="max-h-40 mx-auto object-contain" 
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <Label htmlFor={`desc-${product.id}`}>Descrição</Label>
                      <Textarea
                        id={`desc-${product.id}`}
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleSaveEdit} className="flex-1">
                        <Save className="mr-2 h-4 w-4" />
                        Salvar
                      </Button>
                      <Button variant="outline" onClick={handleCancelEdit} className="flex-1">
                        Cancelar
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" onClick={() => handleEditProduct(product)} className="flex-1">
                        <Pencil className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                      <Button variant="destructive" onClick={() => handleDeleteProduct(product.id)} className="flex-1">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
