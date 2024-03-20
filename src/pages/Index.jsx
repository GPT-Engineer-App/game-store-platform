import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, GridItem, Button, Input, Stack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const games = [
  {
    id: 1,
    title: "Minecraft",
    description: "Build and explore in this creative sandbox game.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBnYW1lJTIwY292ZXJ8ZW58MHx8fHwxNzEwOTE1Mzc5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Fortnite",
    description: "Battle royale game with building and survival elements.",
    price: 0,
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3J0bml0ZSUyMGdhbWUlMjBjb3ZlcnxlbnwwfHx8fDE3MTA5MTUzODB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Grand Theft Auto V",
    description: "Open-world action-adventure game set in Los Santos.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndGElMjB2JTIwZ2FtZSUyMGNvdmVyfGVufDB8fHx8MTcxMDkxNTM4MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more games...
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Game Store
      </Heading>

      <Stack direction="row" mb={8}>
        <Input placeholder="Search games..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <IconButton icon={<FaSearch />} aria-label="Search" onClick={() => {}} />
        <IconButton icon={<FaShoppingCart />} aria-label="Cart" onClick={() => {}} />
        <Text>Cart: {cart.length} items</Text>
      </Stack>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredGames.map((game) => (
          <GridItem key={game.id}>
            <Box borderWidth={1} borderRadius="lg" p={4}>
              <Image src={game.image} alt={game.title} mb={4} />
              <Heading as="h2" size="md" mb={2}>
                {game.title}
              </Heading>
              <Text mb={4}>{game.description}</Text>
              <Text fontWeight="bold" mb={4}>
                ${game.price}
              </Text>
              <Button colorScheme="blue" onClick={() => addToCart(game)} disabled={cart.some((item) => item.id === game.id)}>
                {cart.some((item) => item.id === game.id) ? "In Cart" : "Add to Cart"}
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {cart.length > 0 && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Cart
          </Heading>
          {cart.map((game) => (
            <Box key={game.id} mb={4}>
              <Text>
                {game.title} - ${game.price}
              </Text>
              <Button size="sm" colorScheme="red" onClick={() => removeFromCart(game.id)}>
                Remove
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Index;
