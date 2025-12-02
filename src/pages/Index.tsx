import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    workType: '',
    height: '',
    area: '',
    complexity: '',
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const baseRates: Record<string, number> = {
      facade: 500,
      windows: 400,
      roof: 600,
      installation: 700,
    };

    const complexityMultiplier: Record<string, number> = {
      low: 1,
      medium: 1.3,
      high: 1.6,
    };

    const heightMultiplier = parseFloat(calculatorData.height) > 50 ? 1.4 : 1;
    const area = parseFloat(calculatorData.area) || 0;
    const baseRate = baseRates[calculatorData.workType] || 500;
    const complexity = complexityMultiplier[calculatorData.complexity] || 1;

    const total = baseRate * area * complexity * heightMultiplier;
    setCalculatedPrice(total);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={28} className="text-secondary" />
            <span className="text-xl font-bold">ВысотСтрой</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-secondary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-secondary transition-colors">
              Портфолио
            </a>
            <a href="#team" className="text-sm font-medium hover:text-secondary transition-colors">
              Команда
            </a>
            <a href="#guarantees" className="text-sm font-medium hover:text-secondary transition-colors">
              Гарантии
            </a>
            <a href="#calculator" className="text-sm font-medium hover:text-secondary transition-colors">
              Калькулятор
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://cdn.poehali.dev/projects/c54c1879-f084-4f5c-93f8-4d34d87cf0a1/files/2b28248e-a99b-406e-bf4d-6f5d7ac3c771.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <Badge className="mb-4 bg-accent text-white border-0">15+ лет на рынке</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональные
            <br />
            высотные работы
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Гарантируем безопасность, качество и соблюдение сроков. </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Icon name="FileText" size={20} className="mr-2" />
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Award" size={48} className="mx-auto text-accent mb-2" />
                <CardTitle className="text-3xl">500+</CardTitle>
                <CardDescription>Завершённых проектов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-accent mb-2" />
                <CardTitle className="text-3xl">50+</CardTitle>
                <CardDescription>Квалифицированных специалистов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="ShieldCheck" size={48} className="mx-auto text-accent mb-2" />
                <CardTitle className="text-3xl">100%</CardTitle>
                <CardDescription>Соблюдение техники безопасности</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-2 hover:border-secondary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Clock" size={48} className="mx-auto text-accent mb-2" />
                <CardTitle className="text-3xl">24/7</CardTitle>
                <CardDescription>Аварийная служба</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Виды высотных работ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выполняем полный спектр работ на высоте с применением современного оборудования
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Building',
                title: 'Фасадные работы',
                description: 'Ремонт, утепление и отделка фасадов зданий любой сложности',
              },
              {
                icon: 'Droplet',
                title: 'Герметизация швов',
                description: 'Профессиональная герметизация межпанельных швов и стыков',
              },
              {
                icon: 'Paintbrush',
                title: 'Покраска на высоте',
                description: 'Окраска фасадов, металлоконструкций и промышленных объектов',
              },
              {
                icon: 'Sparkles',
                title: 'Мойка окон и фасадов',
                description: 'Клининг стеклянных и композитных фасадов высотных зданий',
              },
              {
                icon: 'Hammer',
                title: 'Монтажные работы',
                description: 'Установка рекламных конструкций, антенн и оборудования',
              },
              {
                icon: 'Home',
                title: 'Кровельные работы',
                description: 'Ремонт и монтаж кровли, установка снегозадержателей',
              },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-secondary">
                <CardHeader>
                  <Icon name={service.icon as any} size={40} className="text-secondary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Выполненные проекты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'ТЦ "Метрополис"',
                description: 'Комплексный ремонт фасада',
                metrics: '12 000 м² • 45 дней',
              },
              {
                title: 'БЦ "Сити Тауэр"',
                description: 'Мойка стеклянного фасада',
                metrics: '8 500 м² • 15 дней',
              },
              {
                title: 'ЖК "Северный"',
                description: 'Герметизация швов',
                metrics: '25 000 м² • 60 дней',
              },
            ].map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-secondary to-primary"></div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Icon name="Ruler" size={16} />
                    <span>{project.metrics}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Профессионалы своего дела</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Алексей Иванов',
                role: 'Главный инженер',
                experience: '20 лет опыта',
                certs: 'Международный сертификат IRATA Level 3',
              },
              {
                name: 'Дмитрий Петров',
                role: 'Руководитель работ',
                experience: '15 лет опыта',
                certs: 'Сертификат промышленного альпинизма',
              },
              {
                name: 'Сергей Смирнов',
                role: 'Специалист по безопасности',
                experience: '18 лет опыта',
                certs: 'Аттестация Ростехнадзора',
              },
              {
                name: 'Михаил Козлов',
                role: 'Бригадир',
                experience: '12 лет опыта',
                certs: 'Допуск к работам на высоте',
              },
            ].map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>
                    <p className="font-semibold text-foreground">{member.role}</p>
                    <p className="text-sm mt-2">{member.experience}</p>
                    <Badge variant="outline" className="mt-3 text-xs">
                      {member.certs}
                    </Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4">Гарантии</Badge>
            <h2 className="text-4xl font-bold mb-4">Ваша безопасность — наш приоритет</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Icon name="FileCheck" size={40} className="text-accent mb-2" />
                <CardTitle>Лицензии и сертификаты</CardTitle>
                <CardDescription className="text-base space-y-2 text-foreground/70">
                  <p>✓ Лицензия на высотные работы</p>
                  <p>✓ Допуски СРО</p>
                  <p>✓ Сертификаты IRATA</p>
                  <p>✓ Аттестация Ростехнадзора</p>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2">
              <CardHeader>
                <Icon name="Shield" size={40} className="text-accent mb-2" />
                <CardTitle>Страхование</CardTitle>
                <CardDescription className="text-base space-y-2 text-foreground/70">
                  <p>✓ Страхование ответственности до 10 млн ₽</p>
                  <p>✓ Страхование сотрудников</p>
                  <p>✓ Гарантия на работы до 5 лет</p>
                  <p>✓ Договор с фиксированными сроками</p>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8">
            <Card className="border-2 border-accent">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Icon name="HardHat" size={40} className="text-accent flex-shrink-0" />
                  <div>
                    <CardTitle>Техника безопасности</CardTitle>
                    <CardDescription className="text-base mt-2 text-foreground/70">
                      Все наши специалисты ежегодно проходят обучение и аттестацию по технике безопасности. Используем
                      только сертифицированное снаряжение международных стандартов. Каждый объект оснащается системами
                      страховки и спасения.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Калькулятор</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость работ</h2>
            <p className="text-muted-foreground text-lg">Получите предварительную оценку за 1 минуту</p>
          </div>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Параметры объекта</CardTitle>
              <CardDescription>Заполните данные для расчёта стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="workType">Вид работ</Label>
                <Select value={calculatorData.workType} onValueChange={(value) => setCalculatorData({ ...calculatorData, workType: value })}>
                  <SelectTrigger id="workType">
                    <SelectValue placeholder="Выберите вид работ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facade">Фасадные работы</SelectItem>
                    <SelectItem value="windows">Мойка окон</SelectItem>
                    <SelectItem value="roof">Кровельные работы</SelectItem>
                    <SelectItem value="installation">Монтаж конструкций</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Высота объекта (м)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Например, 30"
                    value={calculatorData.height}
                    onChange={(e) => setCalculatorData({ ...calculatorData, height: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь работ (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Например, 150"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({ ...calculatorData, area: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="complexity">Сложность работ</Label>
                <Select value={calculatorData.complexity} onValueChange={(value) => setCalculatorData({ ...calculatorData, complexity: value })}>
                  <SelectTrigger id="complexity">
                    <SelectValue placeholder="Выберите уровень сложности" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Низкая — стандартные работы</SelectItem>
                    <SelectItem value="medium">Средняя — требуется спецоборудование</SelectItem>
                    <SelectItem value="high">Высокая — сложный доступ, нестандартная конфигурация</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Button className="w-full bg-accent hover:bg-accent/90" size="lg" onClick={calculatePrice}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {calculatedPrice !== null && (
                <Card className="bg-secondary text-white border-0 animate-scale-in">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <Icon name="CheckCircle2" size={28} />
                      Предварительная стоимость
                    </CardTitle>
                    <CardDescription className="text-white/80 text-lg">
                      Примерная стоимость работ составит:
                    </CardDescription>
                    <div className="text-4xl font-bold text-white pt-4">
                      {calculatedPrice.toLocaleString('ru-RU')} ₽
                    </div>
                    <p className="text-sm text-white/70 pt-2">
                      * Точная стоимость определяется после выезда специалиста на объект
                    </p>
                  </CardHeader>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-accent text-white border-0">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-white/80 text-lg mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для уточнения деталей
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:+74951234567" className="text-white/80 hover:text-accent transition-colors">
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@vysotstroi.ru" className="text-white/80 hover:text-accent transition-colors">
                      info@vysotstroi.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-white/80">г. Москва, ул. Примерная, д. 10, офис 205</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-white/80">Пн-Пт: 9:00 - 18:00, Сб-Вс: по договорённости</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы перезвоним в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Опишите ваш проект..." rows={4} />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={24} className="text-secondary" />
              <span className="font-bold">ВысотСтрой</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ВысотСтрой. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;