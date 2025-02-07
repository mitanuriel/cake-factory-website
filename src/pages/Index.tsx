
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const candyImages = [
    {
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      alt: "Round candies assortment",
      title: "Classic Round Candies"
    },
    {
      url: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Shaped candies collection",
      title: "Shaped Candies"
    },
    {
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Orange flavored candies",
      title: "Orange Delights"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Welcome to the Cake Factory</h1>
          <p className="text-muted-foreground">Where your sweetest dreams come true</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Featured Candies</CardTitle>
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
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
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

          <Card className="col-span-full lg:col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full">Create New</Button>
                <Button variant="outline" className="w-full">View Reports</Button>
                <Button variant="secondary" className="w-full">Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Recent Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-muted flex items-center justify-center">
                        {item}
                      </div>
                      <div>
                        <h3 className="font-medium">Item {item}</h3>
                        <p className="text-sm text-muted-foreground">Description</p>
                      </div>
                    </div>
                    {item < 5 && <Separator className="my-4" />}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input 
                  type="search" 
                  placeholder="Search items..." 
                  className="w-full"
                />
                <div className="flex flex-wrap gap-2">
                  {['Recent', 'Popular', 'Trending'].map((tag) => (
                    <Button 
                      key={tag} 
                      variant="secondary" 
                      size="sm"
                      className="text-sm"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold">12.5K</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-2xl font-bold">8.2K</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Conversions</p>
                  <p className="text-2xl font-bold">2.4K</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Growth</p>
                  <p className="text-2xl font-bold">+24%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-muted-foreground">
          <p>&copy; 2024 Your Application. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
