import { ReactNode } from "react";
import * as C from "./styles";

import { useForm } from "../../contexts/FormContext";
import { SidebarItem } from "../SidebarItem";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Wrapper>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <C.Sidebar>
              <SidebarItem
                title="Pessoal"
                description="Se identifique"
                icon="profile"
                path="/"
                active={state.currentStep === 1}
              />

              <SidebarItem
                title="Profissional"
                description="Seu nível"
                icon="book"
                path="/step2"
                active={state.currentStep === 2}
              />

              <SidebarItem
                title="Contatos"
                description="Como te achar"
                icon="mail"
                path="/step3"
                active={state.currentStep === 3}
              />
            </C.Sidebar>
          </C.Sidebar>
          <C.Content>{children}</C.Content>
        </C.Steps>
      </C.Wrapper>
    </C.Container>
  );
};
