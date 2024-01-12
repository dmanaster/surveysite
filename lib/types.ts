export type EnvironmentVariable = string | undefined;
export type EnvironmentVariables = EnvironmentVariable[];

export interface BrandSettings {
  brandName: string;
  text: React.ReactElement;
  surveyActive: boolean;
  typeformId: string;
  useDefiniteArticle: boolean;
  favicon: string;
  logo: JSX.Element;
}
