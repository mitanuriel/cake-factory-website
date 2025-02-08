
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [orderDetails, setOrderDetails] = useState({
    cakeType: "",
    email: "",
    phone: "",
    specifications: ""
  });

  const candyImages = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Birthday cakes assortment",
      title: "Classic Birthday Cakes"
    },
    {
      url: "https://images.unsplash.com/photo-1535254973040-607b474cb50d",
      alt: "Wedding cakes collection",
      title: "Classic Wedding cakes"
    },
    {
      url: "https://images.unsplash.com/photo-1599785209796-786432b228bc",
      alt: "Delicious cupcakes",
      title: "Delicious cupcakes"
    }
  ];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderDetails.cakeType || !orderDetails.email || !orderDetails.phone) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }
    
    toast({
      title: "Order Submitted!",
      description: "We'll contact you soon about your order.",
    });
    
    setOrderDetails({
      cakeType: "",
      email: "",
      phone: "",
      specifications: ""
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F1FAEE] to-[#A8DADC]">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-cookie text-[#1D3557] mb-4">Welcome to the Cake Factory</h1>
          <p className="text-xl font-cookie text-[#457B9D]">Where your sweetest dreams come true</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full lg:col-span-2 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Featured Cakes</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {candyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video">
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1D3557]/60 to-transparent text-white rounded-b-lg">
                          <h3 className="text-xl font-semibold">{image.title}</h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-[#F1FAEE]">
                      Order a Cake
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-[500px]">
                    <SheetHeader>
                      <SheetTitle className="text-[#1D3557]">Place Your Order</SheetTitle>
                      <SheetDescription>
                        Fill in the details below to order your custom cake.
                      </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleSubmitOrder} className="space-y-6 mt-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#1D3557]">Cake Type</label>
                        <Select
                          value={orderDetails.cakeType}
                          onValueChange={(value) => setOrderDetails({...orderDetails, cakeType: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select cake type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birthday">Birthday Cake</SelectItem>
                            <SelectItem value="wedding">Wedding Cake</SelectItem>
                            <SelectItem value="cupcakes">Cupcakes</SelectItem>
                            <SelectItem value="custom">Custom Cake</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#1D3557]">Email</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={orderDetails.email}
                          onChange={(e) => setOrderDetails({...orderDetails, email: e.target.value})}
                          className="border-[#A8DADC]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#1D3557]">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="Your phone number"
                          value={orderDetails.phone}
                          onChange={(e) => setOrderDetails({...orderDetails, phone: e.target.value})}
                          className="border-[#A8DADC]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#1D3557]">Specifications</label>
                        <Textarea
                          placeholder="Tell us about your dream cake! Include details about size, flavors, decorations, or any special requirements."
                          value={orderDetails.specifications}
                          onChange={(e) => setOrderDetails({...orderDetails, specifications: e.target.value})}
                          className="min-h-[100px] border-[#A8DADC]"
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-[#457B9D] hover:bg-[#457B9D]/90 text-white"
                      >
                        Submit Order
                      </Button>
                    </form>
                  </SheetContent>
                </Sheet>
                <Button variant="outline" className="w-full border-[#A8DADC] text-[#1D3557] hover:bg-[#A8DADC]/10">View Orders</Button>
                <Button variant="secondary" className="w-full bg-[#457B9D] text-[#F1FAEE] hover:bg-[#457B9D]/80">Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Recent Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-[#A8DADC] flex items-center justify-center text-[#1D3557]">
                        {item}
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1D3557]">Item {item}</h3>
                        <p className="text-sm text-[#457B9D]">Description</p>
                      </div>
                    </div>
                    {item < 5 && <Separator className="my-4 bg-[#A8DADC]" />}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  type="search" 
                  placeholder="Search items..." 
                  className="w-full border-[#A8DADC] focus:ring-[#457B9D]"
                />
                <div className="flex flex-wrap gap-2">
                  {['Recent', 'Popular', 'Trending'].map((tag) => (
                    <Button 
                      key={tag} 
                      variant="secondary" 
                      size="sm"
                      className="text-sm bg-[#457B9D] text-[#F1FAEE] hover:bg-[#457B9D]/80"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1 bg-white/80 backdrop-blur-sm border border-[#A8DADC]">
            <CardHeader>
              <CardTitle className="text-[#1D3557]">Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Total Views</p>
                  <p className="text-2xl font-bold text-[#1D3557]">12.5K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Engagement</p>
                  <p className="text-2xl font-bold text-[#1D3557]">8.2K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Conversions</p>
                  <p className="text-2xl font-bold text-[#1D3557]">2.4K</p>
                </div>
                <div className="p-4 bg-[#A8DADC] rounded-lg">
                  <p className="text-sm text-[#1D3557]">Growth</p>
                  <p className="text-2xl font-bold text-[#1D3557]">+24%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-[#457B9D]">
          <p>&copy; 2025 Cake Factory. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
