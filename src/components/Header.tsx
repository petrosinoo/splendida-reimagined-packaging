import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    {
      name: 'Embalagens de Papelão',
      href: '/embalagens',
      subItems: [
        { name: 'Embalagens de Papelão Ondulado', href: '/embalagens/ondulado' },
        { name: 'Embalagens para Transporte', href: '/embalagens/transporte' },
        { name: 'Embalagens para Logística', href: '/embalagens/logistica' },
        { name: 'Embalagens para Alimentos', href: '/embalagens/alimentos' },
        {
          name: 'Embalagens Personalizadas',
          href: '/embalagens/personalizadas',
          subItems: [
            { name: 'Embalagens Impressas', href: '/embalagens/personalizadas/impressas' },
            { name: 'Embalagens Estampadas', href: '/embalagens/personalizadas/estampadas' },
          ]
        },
        { name: 'Embalagens por Segmento', href: '/embalagens/segmento' },
      ]
    },
    {
      name: 'Atuação',
      href: '/atuacao',
      subItems: [
        { name: 'São Paulo', href: '/atuacao/sao-paulo' },
        { name: 'ABC Paulista', href: '/atuacao/abc' },
        { name: 'Alto Tietê', href: '/atuacao/alto-tiete' },
        { name: 'Vale do Paraíba', href: '/atuacao/vale-paraiba' },
        { name: 'Minas Gerais', href: '/atuacao/minas-gerais' },
        { name: 'Rio de Janeiro', href: '/atuacao/rio-janeiro' },
        { name: 'Bahia', href: '/atuacao/bahia' },
        { name: 'Maranhão', href: '/atuacao/maranhao' },
        { name: 'Pernambuco', href: '/atuacao/pernambuco' },
        { name: 'Rio Grande do Norte', href: '/atuacao/rio-grande-norte' },
        { name: 'Mato Grosso', href: '/atuacao/mato-grosso' },
        { name: 'Pará', href: '/atuacao/para' },
        { name: 'Ceará', href: '/atuacao/ceara' },
        { name: 'Espírito Santo', href: '/atuacao/espirito-santo' },
      ]
    },
    { name: 'Orçamento', href: 'https://splendidaembalagens.com.br/orcamento/', external: true },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Rua São Roque 1135, Vila Japão - Itaquaquecetuba-SP</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(11) 2815-1023</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-green-400" />
              <span>(11) 94519-0641</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-40">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/51cea53a-876f-404d-8e38-1e22c20faa22.png" 
                alt="Splendida Embalagens"
                className="h-36 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="space-x-6">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      {item.subItems ? (
                        <>
                          <NavigationMenuTrigger className="text-foreground hover:text-primary">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-96 p-4">
                              <div className="grid gap-2">
                                {item.subItems.map((subItem) => (
                                  <div key={subItem.name}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={subItem.href}
                                        className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                      >
                                        {subItem.name}
                                      </Link>
                                    </NavigationMenuLink>
                                    {subItem.subItems && (
                                      <div className="ml-4 space-y-1">
                                        {subItem.subItems.map((nestedItem) => (
                                          <NavigationMenuLink key={nestedItem.name} asChild>
                                            <Link
                                              to={nestedItem.href}
                                              className="block px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          </NavigationMenuLink>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : item.external ? (
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground"
                          >
                            {item.name}
                          </a>
                        </NavigationMenuLink>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                              location.pathname === item.href
                                ? 'text-primary'
                                : 'text-foreground'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="py-6">
                    <nav className="space-y-4">
                      {navItems.map((item) => (
                        <div key={item.name}>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className="block py-2 text-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                          {item.subItems && (
                            <div className="ml-4 space-y-2 mt-2">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>
                                  {subItem.subItems && (
                                    <div className="ml-4 space-y-1">
                                      {subItem.subItems.map((nestedItem) => (
                                        <Link
                                          key={nestedItem.name}
                                          to={nestedItem.href}
                                          className="block py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {nestedItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;