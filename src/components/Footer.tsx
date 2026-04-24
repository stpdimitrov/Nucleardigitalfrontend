// Footer Component — CMS-powered with full CRUD for link groups and links

import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Plus, Trash2, Pencil, X, ChevronUp, ChevronDown, Eye, EyeOff } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useCMSStore, EditableText, EditableImage } from '../src/cms';
import { SiteLogo } from '../src/cms/SiteLogo';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterGroup {
  id: string;
  heading: string;
  type: 'internal' | 'external'; // internal = <Link>, external = <a>
  links: FooterLink[];
  hidden?: boolean;
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_GROUPS: FooterGroup[] = [
  {
    id: 'group-main',
    heading: 'Main Pages',
    type: 'internal',
    links: [
      { id: 'link-home',    label: 'Home',       href: '/' },
      { id: 'link-about',   label: 'About us',   href: '/about-us' },
      { id: 'link-contact', label: 'Contact us', href: '/contact-us' },
    ],
  },
  {
    id: 'group-cms',
    heading: 'CMS Pages',
    type: 'internal',
    links: [
      { id: 'link-services', label: 'Services', href: '/services' },
      { id: 'link-projects', label: 'Projects', href: '/projects' },
      { id: 'link-blogs',    label: 'Blogs',    href: '/blogs' },
    ],
  },
  {
    id: 'group-social',
    heading: 'Follow us on',
    type: 'external',
    links: [
      { id: 'link-instagram', label: 'Instagram', href: '' },
      { id: 'link-twitter',   label: 'X-Twitter', href: '' },
      { id: 'link-linkedin',  label: 'LinkedIn',  href: '' },
      { id: 'link-youtube',   label: 'Youtube',   href: '' },
    ],
  },
];

const STORAGE_KEY = 'footer.groups';

// ─── Group Edit Modal ─────────────────────────────────────────────────────────

interface GroupModalProps {
  group: FooterGroup;
  onClose: () => void;
  onSave: (group: FooterGroup) => void;
  onDelete: () => void;
}

function GroupModal({ group, onClose, onSave, onDelete }: GroupModalProps) {
  const [draft, setDraft] = useState<FooterGroup>(JSON.parse(JSON.stringify(group)));
  const [editingLink, setEditingLink] = useState<FooterLink | null>(null);
  const [linkForm, setLinkForm] = useState({ label: '', href: '' });

  const moveLink = (index: number, dir: -1 | 1) => {
    const next = [...draft.links];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setDraft({ ...draft, links: next });
  };

  const openAddLink = () => {
    setEditingLink(null);
    setLinkForm({ label: '', href: '' });
  };

  const openEditLink = (link: FooterLink) => {
    setEditingLink(link);
    setLinkForm({ label: link.label, href: link.href });
  };

  const saveLink = () => {
    if (!linkForm.label.trim()) return;
    if (editingLink) {
      setDraft({ ...draft, links: draft.links.map(l => l.id === editingLink.id ? { ...l, ...linkForm } : l) });
    } else {
      setDraft({ ...draft, links: [...draft.links, { id: `link-${Date.now()}`, ...linkForm }] });
    }
    setEditingLink(null);
    setLinkForm({ label: '', href: '' });
  };

  const deleteLink = (id: string) => {
    setDraft({ ...draft, links: draft.links.filter(l => l.id !== id) });
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#1a1a1a] shadow-2xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 shrink-0">
          <h3 className="text-sm font-semibold text-white">Edit Group</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors"><X className="size-4" /></button>
        </div>

        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Group heading */}
          <div>
            <label className="block text-xs font-medium text-white/60 mb-1">Group Heading</label>
            <input
              type="text"
              value={draft.heading}
              onChange={e => setDraft({ ...draft, heading: e.target.value })}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#0099FF]/60"
              placeholder="e.g. Main Pages"
            />
          </div>

          {/* Link type */}
          <div>
            <label className="block text-xs font-medium text-white/60 mb-2">Link Type</label>
            <div className="flex gap-2">
              {(['internal', 'external'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setDraft({ ...draft, type: t })}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${draft.type === t ? 'bg-[#0099FF] border-[#0099FF] text-white' : 'bg-white/5 border-white/10 text-white/50 hover:text-white'}`}
                >
                  {t === 'internal' ? 'Internal (routes)' : 'External (URLs)'}
                </button>
              ))}
            </div>
          </div>

          {/* Links list */}
          <div>
            <label className="block text-xs font-medium text-white/60 mb-2">Links</label>
            <div className="space-y-1">
              {draft.links.map((link, i) => (
                <div key={link.id} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <div className="flex flex-col gap-0.5">
                    <button onClick={() => moveLink(i, -1)} disabled={i === 0} className="text-white/30 hover:text-white disabled:opacity-20 transition-colors"><ChevronUp className="size-3" /></button>
                    <button onClick={() => moveLink(i, 1)} disabled={i === draft.links.length - 1} className="text-white/30 hover:text-white disabled:opacity-20 transition-colors"><ChevronDown className="size-3" /></button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{link.label}</p>
                    <p className="text-xs text-white/40 truncate">{link.href || '(no URL)'}</p>
                  </div>
                  <button onClick={() => openEditLink(link)} className="text-white/40 hover:text-[#0099FF] transition-colors shrink-0"><Pencil className="size-3.5" /></button>
                  <button onClick={() => deleteLink(link.id)} className="text-white/40 hover:text-red-400 transition-colors shrink-0"><Trash2 className="size-3.5" /></button>
                </div>
              ))}
            </div>

            {/* Inline link form */}
            <div className="mt-3 rounded-lg border border-dashed border-white/20 p-3 space-y-2">
              <p className="text-xs font-medium text-white/50">{editingLink ? 'Edit link' : 'Add link'}</p>
              <input
                type="text"
                value={linkForm.label}
                onChange={e => setLinkForm({ ...linkForm, label: e.target.value })}
                className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white outline-none focus:border-[#0099FF]/60"
                placeholder="Label (e.g. Home)"
              />
              <input
                type="text"
                value={linkForm.href}
                onChange={e => setLinkForm({ ...linkForm, href: e.target.value })}
                className="w-full rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white outline-none focus:border-[#0099FF]/60"
                placeholder={draft.type === 'internal' ? 'Route (e.g. /about-us)' : 'URL (e.g. https://...)'}
              />
              <div className="flex gap-2">
                {editingLink && (
                  <button onClick={() => { setEditingLink(null); setLinkForm({ label: '', href: '' }); }} className="flex-1 rounded bg-white/10 px-3 py-1.5 text-xs text-white/60 hover:text-white transition-colors">
                    Cancel
                  </button>
                )}
                <button
                  onClick={saveLink}
                  disabled={!linkForm.label.trim()}
                  className="flex-1 rounded bg-[#0099FF] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0088ee] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {editingLink ? 'Update' : 'Add link'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-2 border-t border-white/10 px-5 py-4 shrink-0">
          <button onClick={onDelete} className="rounded-lg bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/20 transition-colors">
            Delete Group
          </button>
          <div className="flex-1" />
          <button onClick={onClose} className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors">
            Cancel
          </button>
          <button onClick={() => { onSave(draft); onClose(); }} className="rounded-lg bg-[#0099FF] px-4 py-2 text-sm font-medium text-white hover:bg-[#0088ee] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  const [groups, setGroups] = useState<FooterGroup[]>(() => {
    const stored = getContent(STORAGE_KEY, '');
    if (stored) { try { return JSON.parse(stored) as FooterGroup[]; } catch {} }
    return DEFAULT_GROUPS;
  });
  const [editingGroup, setEditingGroup] = useState<FooterGroup | null>(null);

  // Re-hydrate if CMS loads async
  useEffect(() => {
    const stored = getContent(STORAGE_KEY, '');
    if (stored) { try { setGroups(JSON.parse(stored)); } catch {} }
  }, []);

  const saveGroups = async (next: FooterGroup[]) => {
    setGroups(next);
    updateContent(STORAGE_KEY, JSON.stringify(next));
    await persistContent();
  };

  const handleSaveGroup = (updated: FooterGroup) => {
    saveGroups(groups.map(g => g.id === updated.id ? updated : g));
  };

  const handleDeleteGroup = (id: string) => {
    if (window.confirm('Delete this group?')) saveGroups(groups.filter(g => g.id !== id));
  };

  const handleAddGroup = () => {
    const newGroup: FooterGroup = {
      id: `group-${Date.now()}`,
      heading: 'New Group',
      type: 'internal',
      links: [],
    };
    const next = [...groups, newGroup];
    saveGroups(next);
    setEditingGroup(newGroup);
  };

  const moveGroup = (index: number, dir: -1 | 1) => {
    const next = [...groups];
    const target = index + dir;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    saveGroups(next);
  };

  return (
    <div className="relative w-full shrink-[0]" style={{ order: 1003 }}>
      <footer aria-label="Footer" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[60px] md:pt-[100px] pr-0 pb-8 pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[48px] md:gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">

          <div aria-label="Footer grid" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[36px] z-[4] shrink-[0] grid-cols-1 md:grid-cols-3">
            {/* Left: media */}
            <div aria-label="Video" className="self-start w-full justify-self-start relative h-[240px] md:h-auto">
              <EditableImage
                contentKey="footer.videoUrl"
                defaultSrc=""
                alt="Footer background video"
                className="size-full object-cover overflow-clip"
              />
            </div>

            {/* Right: link groups */}
            <div className="self-start grid h-min justify-center justify-self-start relative w-full gap-[32px] md:gap-[8px] grid-cols-1 sm:grid-cols-3 md:col-span-2"
              style={{ gridTemplateColumns: `repeat(${Math.max(groups.length, 1)}, minmax(0, 1fr))` }}>
              {groups.map((group, gi) => {
                if (!isEditMode && group.hidden) return null;
                return (
                <div key={group.id} aria-label="Footer links wrapper" className={`items-start self-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[20px] group/footergroup transition-opacity ${isEditMode && group.hidden ? 'opacity-40' : 'opacity-100'}`}>

                  {/* Group heading + edit controls */}
                  <div className="flex items-center justify-between w-full gap-2">
                    <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{ fontFamily: 'Ronzino, sans-serif' }}>
                      {group.heading}
                    </p>
                    {isEditMode && (
                      <div className="flex items-center gap-1 opacity-0 group-hover/footergroup:opacity-100 transition-opacity shrink-0">
                        <button onClick={() => moveGroup(gi, -1)} disabled={gi === 0} className="text-white/40 hover:text-white disabled:opacity-20 transition-colors" title="Move left"><ChevronUp className="size-3.5 rotate-[-90deg]" /></button>
                        <button onClick={() => moveGroup(gi, 1)} disabled={gi === groups.length - 1} className="text-white/40 hover:text-white disabled:opacity-20 transition-colors" title="Move right"><ChevronDown className="size-3.5 rotate-[-90deg]" /></button>
                        <button
                          onClick={() => saveGroups(groups.map((g, i) => i === gi ? { ...g, hidden: !g.hidden } : g))}
                          className={`transition-colors ${group.hidden ? 'text-red-400 hover:text-red-300' : 'text-white/40 hover:text-white'}`}
                          title={group.hidden ? 'Show group' : 'Hide group'}
                        >
                          {group.hidden ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                        </button>
                        <button onClick={() => setEditingGroup(group)} className="text-white/40 hover:text-[#0099FF] transition-colors" title="Edit group"><Pencil className="size-3.5" /></button>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                    {group.links.map(link => (
                      <div key={link.id} className="w-full">
                        {group.type === 'external' ? (
                          <>
                            <a
                              href={link.href || undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={link.label}
                              className="flex items-center justify-between w-full py-[12px] group/sociallink"
                            >
                              <p className="font-medium text-white/60 text-[16px] tracking-[-0.32px] leading-[24px] group-hover/sociallink:text-white transition-colors"
                                style={{ fontFamily: '"Apfel Grotezk", sans-serif' }}>
                                {link.label}
                              </p>
                              <ArrowRight className="size-4 text-white/60 group-hover/sociallink:text-white transition-colors shrink-0" />
                            </a>
                            <div className="h-px w-full bg-[rgb(68,68,68)]" />
                          </>
                        ) : (
                          <Link
                            to={link.href || '/'}
                            aria-label={link.label}
                            className="flex flex-col size-min justify-center overflow-clip relative gap-[8px]"
                          >
                            <p className="font-medium text-white/60 text-[16px] tracking-[-0.32px] leading-[24px] hover:text-white transition-colors"
                              style={{ fontFamily: '"Apfel Grotezk", sans-serif' }}>
                              {link.label}
                            </p>
                          </Link>
                        )}
                      </div>
                    ))}

                    {/* Add link shortcut in edit mode */}
                    {isEditMode && (
                      <button
                        onClick={() => setEditingGroup(group)}
                        className="flex items-center gap-1.5 text-xs text-white/30 hover:text-[#0099FF] transition-colors mt-1"
                      >
                        <Plus className="size-3" /> Add link
                      </button>
                    )}
                  </div>
                </div>
                );
              })}

              {/* Add group button (edit mode) */}
              {isEditMode && (
                <div className="self-start flex flex-col justify-start gap-[20px]">
                  <button
                    onClick={handleAddGroup}
                    className="flex items-center gap-2 rounded-lg border border-dashed border-white/20 px-4 py-3 text-sm text-white/40 hover:border-[#0099FF]/60 hover:text-[#0099FF] transition-all w-full justify-center"
                  >
                    <Plus className="size-4" /> Add Group
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[32px] shrink-[0]">
            <div aria-label="Logo" className="items-center flex h-min justify-center relative w-full gap-[8px] shrink-[0]">
              <SiteLogo
                heightKey="site.logoHeightFooter"
                defaultHeight={48}
                minHeight={24}
                maxHeight={120}
                defaultSiteName=""
                defaultLogoUrl=""
              />
              <div className="flex flex-col grow justify-start overflow-hidden relative whitespace-pre w-px basis-0 shrink-[0]">
                <div className="flex flex-col grow justify-start overflow-hidden absolute w-px left-0 top-0 right-0 bottom-0 origin-[0px_0px] basis-0 shrink-[0]" style={{ scale: '0.762' }}>
                  <EditableText
                    contentKey="footer.brandName"
                    defaultValue=""
                    as="p"
                    className="font-medium uppercase text-white text-[262.446px] tracking-[-7.87339px] leading-[236.202px]"
                    style={{ fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif', textDecoration: 'rgb(255, 255, 255)' }}
                  />
                </div>
              </div>
            </div>
            <div aria-label="Grid 6x" className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 pt-[22px] pr-0 pb-0 pl-0 relative w-full border-t border-[rgb(68,68,68)]">
              <div aria-label="Copyright" className="items-center flex h-min justify-start overflow-clip relative gap-[8px]">
                <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                  <EditableText
                    contentKey="footer.copyright"
                    defaultValue=""
                    as="p"
                    className="font-medium text-left text-[rgb(221,221,221)] text-[16px] tracking-[-0.32px] leading-[24px]"
                    style={{ fontFamily: '"Apfel Grotezk", sans-serif', textDecoration: 'rgb(221, 221, 221)' }}
                  />
                </div>
              </div>
              <div aria-label="Template owner" className="items-center flex h-min justify-start overflow-clip relative gap-[8px]">
                <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                  <p className="font-medium text-center text-[rgb(221,221,221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{ fontFamily: '"Apfel Grotezk", sans-serif', textDecoration: 'rgb(221, 221, 221)' }}>
                    <EditableText
                      contentKey="footer.creditPrefix"
                      defaultValue=""
                      as="span"
                      className="font-medium text-[rgb(221,221,221)] text-[16px] tracking-[-0.32px] leading-[24px]"
                      style={{ fontFamily: '"Apfel Grotezk", sans-serif' }}
                    />{' '}
                    <a href={getContent('footer.creditUrl', '')} className="text-center text-white" style={{ textDecoration: 'rgb(255, 255, 255)' }}>
                      <EditableText
                        contentKey="footer.creditName"
                        defaultValue=""
                        as="span"
                        className="text-white"
                        style={{ fontFamily: '"Apfel Grotezk", sans-serif' }}
                      />
                    </a>
                  </p>
                  {isEditMode && (
                    <input
                      type="text"
                      defaultValue={getContent('footer.creditUrl', '')}
                      onBlur={e => { updateContent('footer.creditUrl', e.target.value); persistContent(); }}
                      className="mt-1 w-full rounded bg-white/10 px-2 py-1 text-xs text-white/60 outline-none focus:bg-white/15 focus:text-white border border-white/10 placeholder:text-white/30"
                      placeholder="Credit URL..."
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Group edit modal */}
      {editingGroup && (
        <GroupModal
          group={editingGroup}
          onClose={() => setEditingGroup(null)}
          onSave={handleSaveGroup}
          onDelete={() => { handleDeleteGroup(editingGroup.id); setEditingGroup(null); }}
        />
      )}
    </div>
  );
}
