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
                <Button submit="true">Save</Button>
              </Form>
            </BlockStack>
          </Card>
        </InlineGrid>
      </BlockStack>
    </Page>
  );
}
