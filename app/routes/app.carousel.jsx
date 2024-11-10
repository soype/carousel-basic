import {
  BlockStack,
  Box,
  Button,
  Card,
  Form,
  InlineGrid,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useLoaderData } from "@remix-run/react";

// Import Primsa DB
import db from "../db.server";

export async function loader() {
  // Get data from database
  let carousels = await db.carousel.findMany();

  return json(carousels);
}

export async function action({request}) {
  // Update data in database
  let carousel = await request.formData();
  carousel = Object.fromEntries(carousel);

  await db.carousel.upsert({
    where: {
      id: '1',
    },
    update: {
      id: '1',
      name: carousel.name,
      quantity: carousel.quantity,
      productId: carousel.productId,
    },
    create: {
      id: '1',
      name: carousel.name,
      quantity: carousel.quantity,
      productId: carousel.productId,
    }
  })

  return json(carousel);
}

export default function CarouselPage() {
  return (
    <Page>
      <TitleBar title="Create a carousel" />
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Create a carousel
              </Text>
              <Text as="p" variant="bodyMd">
                Select how many images you want, add the URLs, titles and alt. Then, select the product in which you want to add the carousel.
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <Form method="POST">
                <TextField name="name" label="Carousel name" />
                <TextField name="quantity" label="Number of images" type="number" />
                <TextField name="productId" label="Product ID" />
                <Button submit="true">Save</Button>
              </Form>
            </BlockStack>
          </Card>
        </InlineGrid>
      </BlockStack>
    </Page>
  );
}
