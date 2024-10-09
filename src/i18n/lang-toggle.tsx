import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export function LangToggle() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div>{i18n.language.toLocaleUpperCase()}</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("es")}>
          ES
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("fr")}>
          FR
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
