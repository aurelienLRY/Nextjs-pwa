import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
  Image,
} from "@nextui-org/react";

export default function DemoCard() {
  return (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* Carte Simple */}
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="font-bold text-large">Carte Simple</p>
            <p className="text-small text-default-500">Exemple basique</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Une carte simple avec un en-tête et un contenu.</p>
        </CardBody>
      </Card>

      {/* Carte avec Image */}
      <Card className="max-w-[400px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">Carte avec Image</h4>
          <p className="text-small text-default-500">Exemple avec image</p>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="./images/img-type.jpg"
            width={400}
            height={200}
          />
        </CardBody>
      </Card>

      {/* Carte Interactive */}
      <Card isHoverable isPressable className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="font-bold text-large">Carte Interactive</p>
            <p className="text-small text-default-500">Avec effets au survol</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>Cette carte réagit au survol et au clic.</p>
        </CardBody>
        <CardFooter>
          <Button color="primary" variant="faded" size="sm">
            Action
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
