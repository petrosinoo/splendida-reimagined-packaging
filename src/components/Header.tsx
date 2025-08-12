import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Phone, MapPin, Menu, X, Plus, Minus } from 'lucide-react';
// Logo será carregado da pasta public
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
  const [openSubMenus, setOpenSubMenus] = useState<{[key: string]: boolean}>({});

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

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-1 md:space-y-0">
            <div className="w-full md:w-auto flex items-center space-x-1">
              <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
              <span className="text-[10px] md:text-sm flex-1">Rua São Roque 1135, Vila Japão - Itaquaquecetuba-SP</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span className="text-xs md:text-sm">(11) 2815-1023</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs md:text-sm">(11) 94519-0641</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-start lg:justify-between h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/97c3ebb6-b36f-4a33-b760-925ffc68094f.png" 
                alt="Splendida Embalagens de Papelão"
                className="h-20 md:h-24 w-auto object-contain"
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
                          ) : item.subItems ? (
                            <div>
                              <button
                                onClick={() => toggleSubMenu(item.name)}
                                className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors"
                              >
                                <span>{item.name}</span>
                                {openSubMenus[item.name] ? (
                                  <Minus className="h-4 w-4" />
                                ) : (
                                  <Plus className="h-4 w-4" />
                                )}
                              </button>
                              {openSubMenus[item.name] && (
                                <div className="ml-4 space-y-2 mt-2">
                                  {item.subItems.map((subItem) => (
                                    <div key={subItem.name}>
                                      {subItem.subItems ? (
                                        <div>
                                          <button
                                            onClick={() => toggleSubMenu(subItem.name)}
                                            className="flex items-center justify-between w-full py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          >
                                            <span>{subItem.name}</span>
                                            {openSubMenus[subItem.name] ? (
                                              <Minus className="h-3 w-3" />
                                            ) : (
                                              <Plus className="h-3 w-3" />
                                            )}
                                          </button>
                                          {openSubMenus[subItem.name] && (
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
                                      ) : (
                                        <Link
                                          to={subItem.href}
                                          className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              to={item.href}
                              className="block py-2 text-foreground hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
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