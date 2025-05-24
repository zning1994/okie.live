import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full py-8 bg-white border-t border-primary/10 z-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 mb-6 md:mb-0">
          © {t('site.copyright')}
        </p>
        <div className="flex gap-8">
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
            {t('footer.about_us')}
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
            {t('footer.contact_us')}
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
            {t('footer.privacy_policy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
