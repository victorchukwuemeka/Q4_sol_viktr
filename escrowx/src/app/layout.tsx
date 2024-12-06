import './globals.css'; // Import global styles
import { ClusterProvider } from '@/components/cluster/cluster-data-access'; // Solana cluster management
import { SolanaProvider } from '@/components/solana/solana-provider'; // Solana-specific logic
import { UiLayout } from '@/components/ui/ui-layout'; // Main UI layout for the app
import { ReactQueryProvider } from './react-query-provider'; // React Query setup for state management

export const metadata = {
  title: 'escrowx', // Sets the document title
  description: 'Generated by create-solana-dapp', // Meta description
};

// Define the navigation links for the layout
const links: { label: string; path: string }[] = [
  { label: 'Escrowx Program', path: '/escrowx' }, // Example link for Escrowx
];

// Root layout for the application
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add other meta tags, favicon links, or custom fonts if needed */}
      </head>
      <body>
        {/* Providers for app-wide state and context */}
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <UiLayout links={links}>
                {/* Render children components within the layout */}
                {children}
              </UiLayout>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
