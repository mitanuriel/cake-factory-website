import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Welcome to our candy shop</h1>
          <p className="text-muted-foreground">Discover our modern application</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Featured Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Featured Content Area</p>
              </div>
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
