
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ViewOrders = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 1,
      name: "Rainbow Unicorn Birthday Cake",
      description: "Three-tiered vanilla sponge cake with rainbow colored buttercream layers. Decorated with edible glitter and a fondant unicorn topper. Serves 25-30 people.",
      ingredients: "Vanilla sponge, buttercream, food coloring, fondant, edible glitter",
      size: "12 inch base, 8 inch middle, 6 inch top tier",
      portions: 30,
      status: "in progress"
    },
    {
      id: 2,
      name: "Red Velvet Dream Cupcakes Box",
      description: "Luxurious red velvet cupcakes topped with cream cheese frosting and chocolate shavings. Perfect for small gatherings.",
      ingredients: "Red velvet cake, cream cheese frosting, chocolate shavings, cocoa powder",
      size: "Standard cupcake size, box of 12",
      portions: 12,
      status: "on the way"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "received order":
        return "bg-yellow-500";
      case "in progress":
        return "bg-blue-500";
      case "on the way":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] to-[#d299c2]">
      <div className="max-w-5xl mx-auto mb-6 pt-8 px-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="bg-white/80 border-[#d299c2] text-[#1D3557] hover:bg-[#E5DEFF]/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>

      <Card className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm m-8">
        <CardHeader>
          <CardTitle className="text-3xl font-cookie text-[#1D3557]" style={{ fontFamily: 'Cookie, cursive' }}>Your Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-cookie text-xl" style={{ fontFamily: 'Cookie, cursive' }}>Item</TableHead>
                <TableHead className="font-cookie text-xl" style={{ fontFamily: 'Cookie, cursive' }}>Details</TableHead>
                <TableHead className="font-cookie text-xl" style={{ fontFamily: 'Cookie, cursive' }}>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-cookie text-lg" style={{ fontFamily: 'Cookie, cursive' }}>{order.name}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">{order.description}</p>
                      <div className="text-sm text-gray-600">
                        <p><span className="font-medium">Ingredients:</span> {order.ingredients}</p>
                        <p><span className="font-medium">Size:</span> {order.size}</p>
                        <p><span className="font-medium">Portions:</span> {order.portions}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewOrders;
