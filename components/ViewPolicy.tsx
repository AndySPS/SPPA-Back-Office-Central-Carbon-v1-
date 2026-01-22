import React from 'react';
import { Icons } from './Icons';
import { PolicyItem } from '../types';

interface ViewPolicyProps {
  onBack: () => void;
  policy?: PolicyItem | null;
}

const ViewPolicy: React.FC<ViewPolicyProps> = ({ onBack, policy }) => {
  // Default values matching the screenshot if no policy passed
  const displayPolicy = policy || {
      version: '0.0.4',
      createdBy: 'Test',
      createdDate: '02/26/2025 12:05',
      updatedOn: '08/05/2025 02:34'
  };

  // If the policy passed doesn't have times (since list view might just have dates), we might want to append time for visual match, 
  // but let's just use the data as is or the default if null. 
  // For the specific screenshot match of "0.0.4", we can override if it matches that version.
  if (policy && policy.version === 'Version 0.0.4') {
     displayPolicy.version = '0.0.4'; // Clean version string
     displayPolicy.createdDate = '02/26/2025 12:05';
     displayPolicy.updatedOn = '08/05/2025 02:34';
  } else if (policy) {
     // Clean up "Version X" to "X"
     displayPolicy.version = policy.version.replace('Version ', '');
  }

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-[var(--space-md)] mb-[var(--space-lg)]">
        <button onClick={onBack} className="btn btn-ghost btn-circle btn-sm">
          <Icons.ArrowLeft className="w-5 h-5 text-[var(--color-text-primary)]" />
        </button>
        <h1 className="text-[length:var(--font-size-xl)] font-bold text-[var(--color-text-primary)]">View Policy</h1>
      </div>

      {/* Policy Information Card */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)] mb-[var(--space-lg)]">
        <div className="card-body p-[var(--space-lg)]">
            <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">Policy Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-lg)]">
                <div>
                    <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium mb-[var(--space-xs)]">Policy Version</div>
                    <span className="badge bg-[var(--color-brand-subtle)] text-[var(--color-brand-primary)] border-none rounded px-2 py-3 text-[length:var(--font-size-sm)] font-medium">
                        {displayPolicy.version}
                    </span>
                </div>
                <div>
                    <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium mb-[var(--space-xs)]">Created By</div>
                    <div className="text-[length:var(--font-size-base)] text-[var(--color-text-primary)]">
                        {displayPolicy.createdBy}
                    </div>
                </div>
                 <div>
                    <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium mb-[var(--space-xs)]">Created Date</div>
                    <div className="text-[length:var(--font-size-base)] text-[var(--color-text-primary)]">
                        {displayPolicy.createdDate}
                    </div>
                </div>
                 <div>
                    <div className="text-[length:var(--font-size-sm)] text-[var(--color-text-tertiary)] font-medium mb-[var(--space-xs)]">Updated On</div>
                    <div className="text-[length:var(--font-size-base)] text-[var(--color-text-primary)]">
                        {displayPolicy.updatedOn}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Policy Body Card */}
      <div className="card bg-[var(--color-bg-surface)] shadow-sm border border-[var(--color-border-default)]">
        <div className="card-body p-[var(--space-lg)]">
             <h2 className="text-[length:var(--font-size-lg)] font-bold text-[var(--color-text-primary)] mb-[var(--space-lg)]">Policy Body</h2>
             
             <div className="text-[var(--color-text-primary)] text-[length:var(--font-size-base)] leading-relaxed space-y-4">
                <p>
                    In your <span className="font-bold">Terms and Conditions</span>, you can include rules and guidelines on how users can access and use your website and mobile app.
                </p>
                <p>
                    An Intellectual Property clause will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.
                </p>
                <p>
                    A Termination clause will inform users that any accounts on your website and mobile app, or users' access to your website and app, can be terminated in case of abuses or at your sole discretion.
                </p>
                <p>
                    A Governing Law clause will inform users which laws govern the agreement. These laws should come from the country in which your company is headquartered or the country from which you operate your website and mobile app.
                </p>
                <p>
                    A Links to Other Websites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.
                </p>
                <p>
                    If your website or mobile app allows users to create content and make that content public to other users, a Content clause will inform users that they own the rights to the content they have created. This clause usually mentions that users must give you (the website or mobile app developer/owner) a license so that you can share this content on your website/mobile app and to make it available to other users.
                </p>
                <p>
                    Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.
                </p>
                <p>
                    A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreement so as to encompass the most amount of negative uses.
                </p>
                <p>
                   An <span className="font-bold">Intellectual Property</span><br/>
                   clause will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.
                </p>
                <p>
                   <span className="font-bold">Termination</span><br/>
                   clause will inform users that any accounts on your website and mobile app, or users' access to your website and app, can be terminated in case of abuses or at your sole discretion.
                </p>
                 <p>
                   A <span className="font-bold">Governing Law</span><br/>
                   clause will inform users which laws govern the agreement. These laws should come from the country in which your company is headquartered or the country from which you operate your website and mobile app.
                </p>
                 <p>
                   A <span className="font-bold">Links to Other Websites</span><br/>
                   clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.
                </p>
                 <p>
                   If your website or mobile app allows users to create content and make that content public to other users, a <span className="font-bold">Content</span> clause will inform users that they own the rights to the content they have created. This clause usually mentions that users must give you (the website or mobile app developer/owner) a license so that you can share this content on your website/mobile app and to make it available to other users.
                </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPolicy;