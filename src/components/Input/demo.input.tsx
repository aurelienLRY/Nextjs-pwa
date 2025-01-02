import { Input } from "@nextui-org/react";

export default function DemoInput() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          label="Nom"
          placeholder="Entrez votre nom"
          color="primary"
        />
        <Input
          type="email"
          label="Email"
          placeholder="vous@exemple.com"
          color="primary"
        />
        <Input
          type="password"
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          color="primary"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          variant="bordered"
          label="Bordered"
          placeholder="Bordered input"
        />
        <Input
          type="text"
          variant="flat"
          label="Flat"
          placeholder="Flat input"
        />
        <Input
          type="text"
          variant="underlined"
          label="Underlined"
          placeholder="Underlined input"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          size="sm"
          label="Small"
          placeholder="Small input"
        />
        <Input
          type="text"
          size="md"
          label="Medium"
          placeholder="Medium input"
        />
        <Input
          type="text"
          size="lg"
          label="Large"
          placeholder="Large input"
        />
      </div>
    </div>
  );
} 