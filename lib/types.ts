export type EnvironmentVariable = string | undefined;
export type EnvironmentVariables = EnvironmentVariable[];

export interface BrandSettings {
  brandName: string;
  surveyActive: boolean;
  typeformId: string;
  useDefiniteArticle: boolean;
  favicon: string;
  logo: JSX.Element;
}
