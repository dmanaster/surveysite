export type EnvironmentVariable = string | undefined;
export type EnvironmentVariables = EnvironmentVariable[];

export interface BrandData {
  name: string;
  text: React.ReactElement;
  surveyActive: boolean;
  typeformId: string;
  useDefiniteArticle: boolean;
  favicon: string;
  logo: JSX.Element;
}

export interface TypeformProps {
  typeformId: string;
}
