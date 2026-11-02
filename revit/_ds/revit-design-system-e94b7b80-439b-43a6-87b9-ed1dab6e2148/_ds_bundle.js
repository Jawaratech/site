/* @ds-bundle: {"format":4,"namespace":"RevitDesignSystem_e94b7b","components":[{"name":"Button","sourcePath":"components/aksi/Button.jsx"},{"name":"PaguCard","sourcePath":"components/data/PaguCard.jsx"},{"name":"QueueTable","sourcePath":"components/data/QueueTable.jsx"},{"name":"OtpInput","sourcePath":"components/form/OtpInput.jsx"},{"name":"TextField","sourcePath":"components/form/TextField.jsx"},{"name":"GrafikBatang","sourcePath":"components/grafik/GrafikBatang.jsx"},{"name":"GrafikGaris","sourcePath":"components/grafik/GrafikGaris.jsx"},{"name":"GrafikPai","sourcePath":"components/grafik/GrafikPai.jsx"},{"name":"BrandLockup","sourcePath":"components/identitas/BrandLockup.jsx"},{"name":"WizardStepper","sourcePath":"components/navigasi/WizardStepper.jsx"},{"name":"PetaWilayah","sourcePath":"components/peta/PetaWilayah.jsx"},{"name":"SlaChip","sourcePath":"components/status/SlaChip.jsx"},{"name":"STATUS","sourcePath":"components/status/StatusBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/status/StatusBadge.jsx"},{"name":"ReviewerNote","sourcePath":"components/umpan-balik/ReviewerNote.jsx"}],"sourceHashes":{"components/aksi/Button.jsx":"e19dc27d9a79","components/data/PaguCard.jsx":"834ed1238292","components/data/QueueTable.jsx":"54aded3778ff","components/form/OtpInput.jsx":"1d52c25f59a1","components/form/TextField.jsx":"12216aa9ea45","components/grafik/GrafikBatang.jsx":"e833d520512c","components/grafik/GrafikGaris.jsx":"78dd926c9e44","components/grafik/GrafikPai.jsx":"6cbe307ce418","components/grafik/chartUtil.js":"74336470d4b9","components/identitas/BrandLockup.jsx":"4c462d221f3b","components/navigasi/WizardStepper.jsx":"812d01db3f31","components/peta/PetaWilayah.jsx":"1816a3e39a4e","components/status/SlaChip.jsx":"ba878d4bfa44","components/status/StatusBadge.jsx":"284ae2276bbd","components/umpan-balik/ReviewerNote.jsx":"ada04dffd83f","ui_kits/portal/DashboardScreen.jsx":"ada450f21e72","ui_kits/portal/LoginScreen.jsx":"6c081f115678","ui_kits/portal/QueueScreen.jsx":"c038707d7d4b","ui_kits/portal/Shell.jsx":"a050aa170a16","ui_kits/portal/WizardScreen.jsx":"51458fa35375"},"inlinedExternals":[],"unexposedExports":[{"name":"chartFrame","sourcePath":"components/grafik/chartUtil.js"},{"name":"chartSrc","sourcePath":"components/grafik/chartUtil.js"},{"name":"cssVar","sourcePath":"components/grafik/chartUtil.js"},{"name":"formatRupiah","sourcePath":"components/data/QueueTable.jsx"},{"name":"loadCss","sourcePath":"components/grafik/chartUtil.js"},{"name":"loadScript","sourcePath":"components/grafik/chartUtil.js"},{"name":"rp","sourcePath":"components/grafik/chartUtil.js"},{"name":"themeChart","sourcePath":"components/grafik/chartUtil.js"},{"name":"useChart","sourcePath":"components/grafik/chartUtil.js"}]} */

(() => {

const __ds_ns = (window.RevitDesignSystem_e94b7b = window.RevitDesignSystem_e94b7b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/aksi/Button.jsx
try { (() => {
const V = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--on-primary)',
    borderColor: 'var(--primary)'
  },
  secondary: {
    background: 'var(--surface)',
    color: 'var(--primary)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--primary)',
    borderColor: 'transparent'
  },
  danger: {
    background: 'var(--danger-subtle)',
    color: 'var(--danger-text)',
    borderColor: 'var(--danger)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--primary-hover)',
    borderColor: 'var(--primary-hover)'
  },
  secondary: {
    background: 'var(--primary-subtle)'
  },
  ghost: {
    background: 'var(--primary-subtle)'
  },
  danger: {}
};
const DISABLED = {
  background: 'var(--surface-muted)',
  color: 'var(--text-secondary)',
  borderColor: 'var(--border)',
  cursor: 'not-allowed'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  disabledReason,
  icon,
  iconRight,
  fullWidth = false,
  type = 'button',
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const s = Object.assign({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    font: '600 14px/20px var(--font-sans)',
    padding: '10px 16px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: 'pointer',
    minHeight: size === 'touch' ? 44 : 40,
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : undefined,
    transition: 'background 120ms ease'
  }, V[variant] || V.primary, !disabled && hover ? HOVER[variant] : null, disabled ? DISABLED : null, style);
  const btn = React.createElement('button', {
    type,
    className: 'rv-focus',
    disabled,
    onClick: disabled ? undefined : onClick,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon, children, iconRight);
  if (!disabled || !disabledReason) return btn;
  return React.createElement('span', {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      flexDirection: 'column',
      gap: 4
    }
  }, btn, React.createElement('span', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, disabledReason));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/aksi/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/PaguCard.jsx
try { (() => {
const TONE = {
  default: 'var(--text-primary)',
  success: 'var(--success-text)',
  warning: 'var(--warning-text)',
  danger: 'var(--danger-text)'
};
function PaguCard({
  label,
  value,
  note,
  tone = 'default',
  style
}) {
  return React.createElement('div', {
    style: Object.assign({
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      boxShadow: 'var(--shadow-card)',
      minWidth: 0
    }, style)
  }, React.createElement('div', {
    style: {
      font: '500 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('div', {
    style: {
      font: '700 24px/32px var(--font-sans)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 4,
      color: TONE[tone] || TONE.default
    }
  }, value), note && React.createElement('div', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, note));
}
Object.assign(__ds_scope, { PaguCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PaguCard.jsx", error: String((e && e.message) || e) }); }

// components/form/OtpInput.jsx
try { (() => {
function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  title = 'Masukkan kode dari aplikasi authenticator',
  backupLabel = 'Pakai kode cadangan',
  onBackup,
  error
}) {
  const [inner, setInner] = React.useState('');
  const v = (value != null ? value : inner).slice(0, length);
  const refs = React.useRef([]);
  const [focusIdx, setFocusIdx] = React.useState(-1);
  const set = next => {
    next = next.replace(/\D/g, '').slice(0, length);
    if (value == null) setInner(next);
    onChange && onChange(next);
    if (next.length === length && onComplete) onComplete(next);
    return next;
  };
  const onKey = (i, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const n = v.slice(0, Math.max(0, v[i] ? i : i - 1));
      set(n);
      const t = refs.current[Math.max(0, n.length)];
      t && t.focus();
    } else if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1].focus();else if (e.key === 'ArrowRight' && i < length - 1) refs.current[i + 1].focus();
  };
  const onInput = (i, e) => {
    const d = e.target.value.replace(/\D/g, '');
    if (!d) return;
    const n = set(v.slice(0, i) + d);
    const t = refs.current[Math.min(n.length, length - 1)];
    t && t.focus();
  };
  const onPaste = e => {
    e.preventDefault();
    const n = set(e.clipboardData.getData('text') || '');
    const t = refs.current[Math.min(n.length, length - 1)];
    t && t.focus();
  };
  const box = i => ({
    width: 44,
    height: 52,
    boxSizing: 'border-box',
    textAlign: 'center',
    border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-strong)'),
    borderRadius: 'var(--radius-md)',
    background: 'var(--surface)',
    color: 'var(--text-primary)',
    font: '600 20px/28px var(--font-sans)',
    outline: focusIdx === i ? '2px solid var(--focus-ring)' : 'none',
    caretColor: 'var(--primary)'
  });
  return React.createElement('div', null, title && React.createElement('p', {
    style: {
      font: '600 16px/24px var(--font-sans)',
      margin: '0 0 8px',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8
    },
    onPaste
  }, Array.from({
    length
  }, (_, i) => React.createElement('input', {
    key: i,
    ref: el => refs.current[i] = el,
    value: v[i] || '',
    inputMode: 'numeric',
    autoComplete: i === 0 ? 'one-time-code' : 'off',
    'aria-label': 'Digit ' + (i + 1),
    maxLength: length,
    onChange: e => onInput(i, e),
    onKeyDown: e => onKey(i, e),
    onFocus: () => setFocusIdx(i),
    onBlur: () => setFocusIdx(-1),
    style: box(i)
  }))), error && React.createElement('div', {
    style: {
      font: '500 12px/16px var(--font-sans)',
      color: 'var(--danger-text)',
      marginTop: 6
    }
  }, error), React.createElement('button', {
    type: 'button',
    className: 'rv-focus',
    onClick: onBackup,
    style: {
      display: 'block',
      marginTop: 12,
      padding: 0,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--primary)',
      font: '500 14px/20px var(--font-sans)'
    }
  }, backupLabel));
}
Object.assign(__ds_scope, { OtpInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/form/OtpInput.jsx", error: String((e && e.message) || e) }); }

// components/form/TextField.jsx
try { (() => {
function TextField({
  label,
  id,
  value,
  defaultValue,
  onChange,
  placeholder,
  helper,
  error,
  type = 'text',
  required = false,
  disabled = false,
  inputMode,
  maxLength,
  size = 'lg',
  style
}) {
  const fid = id || React.useId();
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    font: size === 'lg' ? '400 16px/24px var(--font-sans)' : '400 14px/22px var(--font-sans)',
    padding: size === 'lg' ? '10px 12px' : '8px 12px',
    border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border-strong)'),
    borderRadius: 'var(--radius-md)',
    background: disabled ? 'var(--surface-muted)' : 'var(--surface)',
    color: 'var(--text-primary)'
  };
  return React.createElement('div', {
    style: Object.assign({
      display: 'flex',
      flexDirection: 'column'
    }, style)
  }, label && React.createElement('label', {
    htmlFor: fid,
    style: {
      display: 'block',
      font: '600 14px/20px var(--font-sans)',
      marginBottom: 6,
      color: 'var(--text-primary)'
    }
  }, label, required && React.createElement('span', {
    style: {
      color: 'var(--danger-text)'
    }
  }, ' *')), React.createElement('input', {
    id: fid,
    className: 'rv-input',
    type,
    value,
    defaultValue,
    onChange,
    placeholder,
    disabled,
    inputMode,
    maxLength,
    required,
    'aria-invalid': !!error,
    'aria-describedby': fid + '-msg',
    style: inputStyle
  }), (error || helper) && React.createElement('div', {
    id: fid + '-msg',
    style: error ? {
      font: '500 12px/16px var(--font-sans)',
      color: 'var(--danger-text)',
      marginTop: 4
    } : {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, error || helper));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/form/TextField.jsx", error: String((e && e.message) || e) }); }

// components/grafik/chartUtil.js
try { (() => {
const cache = {};
const chartSrc = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
function loadScript(src, globalName) {
  if (window[globalName]) return Promise.resolve(window[globalName]);
  if (!cache[src]) cache[src] = new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => res(window[globalName]);
    s.onerror = rej;
    document.head.appendChild(s);
  });
  return cache[src];
}
function loadCss(href) {
  if (document.querySelector('link[href="' + href + '"]')) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  document.head.appendChild(l);
}
function cssVar(n, el) {
  return getComputedStyle(el || document.documentElement).getPropertyValue('--' + n).trim();
}
function rp(x) {
  return Number(x).toLocaleString('id-ID');
}
function themeChart(Chart, el) {
  const v = n => cssVar(n, el);
  Chart.defaults.font.family = v('font-sans') || 'system-ui';
  Chart.defaults.font.size = 12;
  Chart.defaults.color = v('text-secondary');
  const t = Chart.defaults.plugins.tooltip;
  t.backgroundColor = v('surface');
  t.titleColor = v('text-primary');
  t.bodyColor = v('text-primary');
  t.borderColor = v('border');
  t.borderWidth = 1;
  t.padding = 10;
  t.cornerRadius = 8;
  return {
    v,
    C: [1, 2, 3, 4, 5, 6].map(i => v('chart-' + i))
  };
}
function useChart(build, deps) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let chart,
      dead = false;
    loadScript(chartSrc, 'Chart').then(Chart => {
      if (dead || !ref.current) return;
      const th = themeChart(Chart, ref.current);
      chart = new Chart(ref.current, build(th));
    });
    return () => {
      dead = true;
      chart && chart.destroy();
    };
  }, deps);
  return ref;
}
const lnk = {
  font: '600 13px/20px var(--font-sans)',
  color: 'var(--primary)',
  background: 'none',
  border: 0,
  cursor: 'pointer',
  padding: 0
};
const thS = {
  textAlign: 'left',
  font: '600 12px/16px var(--font-sans)',
  color: 'var(--text-secondary)',
  padding: '8px 12px',
  background: 'var(--surface-muted)',
  borderBottom: '1px solid var(--border)'
};
const tdS = {
  padding: '8px 12px',
  borderBottom: '1px solid var(--border)',
  font: '400 14px/20px var(--font-sans)'
};
function chartFrame({
  title,
  subtitle,
  header,
  table,
  showTable,
  setShowTable,
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-card)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 12
    }
  }, React.createElement('div', null, React.createElement('p', {
    style: {
      margin: 0,
      font: '600 16px/24px var(--font-sans)'
    }
  }, title), header || subtitle && React.createElement('p', {
    style: {
      margin: 0,
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), table && React.createElement('button', {
    type: 'button',
    className: 'rv-focus',
    style: lnk,
    onClick: () => setShowTable(!showTable)
  }, showTable ? 'Lihat grafik' : 'Lihat tabel')), React.createElement('div', {
    style: {
      display: showTable ? 'none' : 'block'
    }
  }, children), showTable && table && React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, table.head.map((h, i) => React.createElement('th', {
    key: i,
    style: Object.assign({}, thS, i > 0 ? {
      textAlign: 'right'
    } : null)
  }, h)))), React.createElement('tbody', null, table.rows.map((r, j) => React.createElement('tr', {
    key: j
  }, r.map((c, i) => React.createElement('td', {
    key: i,
    style: Object.assign({}, tdS, i > 0 ? {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums'
    } : null)
  }, c)))))));
}
Object.assign(__ds_scope, { chartSrc, loadScript, loadCss, cssVar, rp, themeChart, useChart, chartFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grafik/chartUtil.js", error: String((e && e.message) || e) }); }

// components/grafik/GrafikBatang.jsx
try { (() => {
function GrafikBatang({
  title,
  subtitle,
  labels = [],
  values = [],
  seriesLabel = 'Proposal',
  unit = 'proposal',
  horizontal = true,
  sort = true,
  height = 220
}) {
  const [showTable, setShowTable] = React.useState(false);
  let pairs = labels.map((l, i) => [l, values[i]]);
  if (sort) pairs = pairs.slice().sort((a, b) => b[1] - a[1]);
  const L = pairs.map(p => p[0]),
    D = pairs.map(p => p[1]);
  const ref = __ds_scope.useChart(({
    v,
    C
  }) => {
    const valAx = {
      grid: {
        color: v('chart-grid')
      },
      border: {
        color: v('chart-axis')
      },
      ticks: {
        callback: x => __ds_scope.rp(x)
      }
    };
    const catAx = {
      grid: {
        display: false
      },
      border: {
        color: v('chart-axis')
      },
      ticks: {
        color: v('text-primary')
      }
    };
    return {
      type: 'bar',
      data: {
        labels: L,
        datasets: [{
          label: seriesLabel,
          data: D,
          backgroundColor: C[0],
          borderRadius: 4,
          borderSkipped: 'start',
          barPercentage: 0.7,
          categoryPercentage: 0.9
        }]
      },
      options: {
        indexAxis: horizontal ? 'y' : 'x',
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: c => __ds_scope.rp(c.raw) + ' ' + unit
            }
          }
        },
        scales: horizontal ? {
          x: valAx,
          y: catAx
        } : {
          y: valAx,
          x: catAx
        }
      }
    };
  }, [JSON.stringify(L), JSON.stringify(D), horizontal]);
  return __ds_scope.chartFrame({
    title,
    subtitle,
    showTable,
    setShowTable,
    table: {
      head: ['Kategori', seriesLabel],
      rows: pairs.map(p => [p[0], __ds_scope.rp(p[1])])
    },
    children: React.createElement('div', {
      style: {
        height,
        position: 'relative'
      }
    }, React.createElement('canvas', {
      ref,
      role: 'img',
      'aria-label': title
    }))
  });
}
Object.assign(__ds_scope, { GrafikBatang });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grafik/GrafikBatang.jsx", error: String((e && e.message) || e) }); }

// components/grafik/GrafikGaris.jsx
try { (() => {
function GrafikGaris({
  title,
  subtitle,
  labels = [],
  series = [],
  height = 220
}) {
  const [showTable, setShowTable] = React.useState(false);
  const S = series.slice(0, 4);
  const ref = __ds_scope.useChart(({
    v,
    C
  }) => ({
    type: 'line',
    data: {
      labels,
      datasets: S.map((s, i) => ({
        label: s.label,
        data: s.data,
        borderColor: C[i],
        backgroundColor: C[i],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        tension: 0.25
      }))
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: S.length > 1,
          position: 'top',
          align: 'start',
          labels: {
            boxWidth: 12,
            boxHeight: 2,
            color: v('text-primary')
          }
        },
        tooltip: {
          callbacks: {
            label: c => c.dataset.label + ': ' + __ds_scope.rp(c.raw)
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          border: {
            color: v('chart-axis')
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: v('chart-grid')
          },
          border: {
            display: false
          },
          ticks: {
            callback: x => __ds_scope.rp(x)
          }
        }
      }
    }
  }), [JSON.stringify(labels), JSON.stringify(S)]);
  return __ds_scope.chartFrame({
    title,
    subtitle,
    showTable,
    setShowTable,
    table: {
      head: ['Periode'].concat(S.map(s => s.label)),
      rows: labels.map((l, i) => [l].concat(S.map(s => __ds_scope.rp(s.data[i]))))
    },
    children: React.createElement('div', {
      style: {
        height,
        position: 'relative'
      }
    }, React.createElement('canvas', {
      ref,
      role: 'img',
      'aria-label': title
    }))
  });
}
Object.assign(__ds_scope, { GrafikGaris });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grafik/GrafikGaris.jsx", error: String((e && e.message) || e) }); }

// components/grafik/GrafikPai.jsx
try { (() => {
function GrafikPai({
  title,
  subtitle,
  labels = [],
  values = [],
  centerLabel = 'proposal',
  size = 200
}) {
  const [showTable, setShowTable] = React.useState(false);
  const L = labels.slice(0, 5),
    D = values.slice(0, 5);
  const tot = D.reduce((a, b) => a + b, 0) || 1;
  const pct = x => Math.round(x / tot * 100) + '%';
  const [colors, setColors] = React.useState([]);
  const ref = __ds_scope.useChart(({
    v,
    C
  }) => {
    setColors(C);
    return {
      type: 'doughnut',
      data: {
        labels: L,
        datasets: [{
          data: D,
          backgroundColor: C.slice(0, L.length),
          borderColor: v('surface'),
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      options: {
        cutout: '68%',
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: c => c.label + ': ' + __ds_scope.rp(c.raw) + ' (' + pct(c.raw) + ')'
            }
          }
        }
      }
    };
  }, [JSON.stringify(L), JSON.stringify(D)]);
  const legend = React.createElement('ul', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, L.map((l, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: '400 14px/22px var(--font-sans)'
    }
  }, React.createElement('i', {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: colors[i] || 'var(--chart-' + (i + 1) + ')'
    }
  }), React.createElement('span', null, l), React.createElement('span', {
    style: {
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-secondary)'
    }
  }, pct(D[i]) + ' \u00b7 ' + __ds_scope.rp(D[i])))));
  return __ds_scope.chartFrame({
    title,
    subtitle,
    showTable,
    setShowTable,
    table: {
      head: ['Bagian', 'Jumlah', 'Persen'],
      rows: L.map((l, i) => [l, __ds_scope.rp(D[i]), pct(D[i])])
    },
    children: React.createElement('div', {
      style: {
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, React.createElement('div', {
      style: {
        position: 'relative',
        width: size,
        height: size
      }
    }, React.createElement('canvas', {
      ref,
      role: 'img',
      'aria-label': title
    }), React.createElement('div', {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }
    }, React.createElement('b', {
      style: {
        font: '700 24px/32px var(--font-sans)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, __ds_scope.rp(tot)), React.createElement('span', {
      style: {
        font: '500 12px/16px var(--font-sans)',
        color: 'var(--text-secondary)'
      }
    }, centerLabel))), legend)
  });
}
Object.assign(__ds_scope, { GrafikPai });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/grafik/GrafikPai.jsx", error: String((e && e.message) || e) }); }

// components/identitas/BrandLockup.jsx
try { (() => {
function BrandLockup({
  emblemSrc = 'assets/logo-setneg-ri.svg',
  size = 36,
  portal,
  onDark = false,
  style
}) {
  const wm = size >= 48 ? 24 : 20;
  const inner = React.createElement('div', {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }, onDark ? {
      background: '#ffffff',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-2) var(--space-3)'
    } : null, style)
  }, React.createElement('img', {
    src: emblemSrc,
    width: size,
    height: size,
    alt: 'Kementerian Sekretariat Negara RI',
    style: {
      display: 'block'
    }
  }), React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 1,
      height: Math.round(size * 0.6),
      background: 'var(--border-strong)'
    }
  }), React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('span', {
    style: {
      font: '700 ' + wm + 'px/' + (wm + 8) + 'px var(--font-sans)',
      letterSpacing: '-.02em',
      color: onDark ? '#1a2b4c' : 'var(--text-primary)'
    }
  }, 'Revit'), portal && React.createElement('span', {
    style: {
      font: '500 12px/16px var(--font-sans)',
      color: onDark ? '#5a6270' : 'var(--text-secondary)'
    }
  }, portal)));
  return inner;
}
Object.assign(__ds_scope, { BrandLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/identitas/BrandLockup.jsx", error: String((e && e.message) || e) }); }

// components/navigasi/WizardStepper.jsx
try { (() => {
const N = {
  done: {
    background: 'var(--success-subtle)',
    color: 'var(--success-text)',
    borderColor: 'var(--success)'
  },
  active: {
    background: 'var(--primary)',
    color: 'var(--on-primary)',
    borderColor: 'var(--primary)'
  },
  revisi: {
    background: 'var(--warning-subtle)',
    color: 'var(--warning-text)',
    borderColor: 'var(--warning)'
  },
  todo: {
    background: 'var(--surface)',
    color: 'var(--text-primary)',
    borderColor: 'var(--border-strong)'
  }
};
function WizardStepper({
  steps = [],
  savedAt,
  compact = false,
  onStepClick
}) {
  const items = [];
  steps.forEach((s, i) => {
    const st = s.state || 'todo';
    if (i > 0) items.push(React.createElement('span', {
      key: 'l' + i,
      'aria-hidden': true,
      style: {
        width: 24,
        height: 1,
        background: 'var(--border-strong)',
        flex: 'none'
      }
    }));
    const showLabel = !compact || st === 'active';
    items.push(React.createElement(onStepClick ? 'button' : 'div', {
      key: i,
      type: onStepClick ? 'button' : undefined,
      className: onStepClick ? 'rv-focus' : undefined,
      onClick: onStepClick ? () => onStepClick(i) : undefined,
      'aria-current': st === 'active' ? 'step' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: (st === 'active' ? '600' : '500') + ' 13px/20px var(--font-sans)',
        color: st === 'active' ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: 'none',
        border: 0,
        padding: 0,
        cursor: onStepClick ? 'pointer' : 'default'
      }
    }, React.createElement('span', {
      style: Object.assign({
        width: 28,
        height: 28,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        boxSizing: 'border-box',
        font: '600 13px/20px var(--font-sans)',
        flex: 'none'
      }, N[st])
    }, st === 'done' ? '\u2713' : i + 1), showLabel && s.label));
  });
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, items, savedAt && React.createElement('span', {
    style: {
      marginLeft: 'auto',
      font: '500 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, savedAt));
}
Object.assign(__ds_scope, { WizardStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigasi/WizardStepper.jsx", error: String((e && e.message) || e) }); }

// components/peta/PetaWilayah.jsx
try { (() => {
const LEAFLET_JS = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
const LEAFLET_CSS = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
function PetaWilayah({
  title = 'Sebaran proposal per provinsi',
  geojson,
  geojsonUrl,
  valueKey = 'proposal',
  nameKey = 'provinsi',
  unit = 'proposal',
  breaks = [0, 250, 450, 650, 850],
  legendLabel = 'Proposal:',
  height = 330,
  center = [-2.5, 118],
  zoom = 4.25,
  onRegionClick,
  onLihatTabel
}) {
  const ref = React.useRef(null);
  const [crumb, setCrumb] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const [seq, setSeq] = React.useState([1, 2, 3, 4, 5].map(i => 'var(--chart-seq-' + i + ')'));
  React.useEffect(() => {
    let map,
      dead = false;
    __ds_scope.loadCss(LEAFLET_CSS);
    Promise.all([__ds_scope.loadScript(LEAFLET_JS, 'L'), geojson ? Promise.resolve(geojson) : geojsonUrl ? fetch(geojsonUrl).then(r => r.json()) : Promise.resolve(null)]).then(([L, g]) => {
      if (dead || !ref.current) return;
      const v = n => __ds_scope.cssVar(n, ref.current);
      const S = [1, 2, 3, 4, 5].map(i => v('chart-seq-' + i));
      setSeq(S);
      const col = x => {
        let k = 0;
        breaks.forEach((b, i) => {
          if (x >= b) k = i;
        });
        return S[k];
      };
      map = L.map(ref.current, {
        zoomSnap: 0.25,
        scrollWheelZoom: false
      }).setView(center, zoom);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '\u00a9 OpenStreetMap contributors'
      }).addTo(map);
      if (!g) return;
      const layer = L.geoJSON(g, {
        style: f => ({
          fillColor: col(f.properties[valueKey]),
          fillOpacity: 0.85,
          color: v('map-boundary'),
          weight: 1
        }),
        onEachFeature: (f, l) => {
          l.bindTooltip('<b>' + f.properties[nameKey] + '</b><br>' + Number(f.properties[valueKey]).toLocaleString('id-ID') + ' ' + unit, {
            className: 'rv-map-tt',
            sticky: true
          });
          l.on('mouseover', () => {
            l.setStyle({
              color: v('map-boundary-active'),
              weight: 2
            });
            l.bringToFront();
          });
          l.on('mouseout', () => layer.resetStyle(l));
          l.on('click', () => {
            setCrumb(f.properties[nameKey]);
            map.fitBounds(l.getBounds(), {
              padding: [20, 20]
            });
            onRegionClick && onRegionClick(f.properties);
          });
        }
      }).addTo(map);
    }).catch(() => setErr('Data batas wilayah tidak termuat.'));
    return () => {
      dead = true;
      map && map.remove();
    };
  }, [geojson, geojsonUrl]);
  const lnk = {
    font: '600 13px/20px var(--font-sans)',
    color: 'var(--primary)',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: 0
  };
  return React.createElement('div', {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-card)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('style', null, '.rv-map-tt{background:var(--surface);color:var(--text-primary);border:1px solid var(--border);border-radius:8px;box-shadow:var(--shadow-overlay);font:400 13px/18px var(--font-sans);padding:6px 10px}'), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      marginBottom: 12
    }
  }, React.createElement('div', null, React.createElement('p', {
    style: {
      margin: 0,
      font: '600 16px/24px var(--font-sans)'
    }
  }, title), React.createElement('p', {
    style: {
      margin: 0,
      font: '500 13px/20px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, crumb ? React.createElement(React.Fragment, null, React.createElement('a', {
    href: '#',
    className: 'rv-link',
    onClick: e => {
      e.preventDefault();
      setCrumb(null);
    }
  }, 'Nasional'), ' \u203a ', React.createElement('b', {
    style: {
      color: 'var(--text-primary)'
    }
  }, crumb)) : React.createElement(React.Fragment, null, React.createElement('b', {
    style: {
      color: 'var(--text-primary)'
    }
  }, 'Nasional'), ' \u203a pilih provinsi'))), React.createElement('button', {
    type: 'button',
    className: 'rv-focus',
    style: lnk,
    onClick: onLihatTabel
  }, 'Lihat tabel')), React.createElement('div', {
    ref,
    role: 'img',
    'aria-label': 'Peta choropleth ' + title,
    style: {
      height,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-muted)',
      border: '1px solid var(--border)'
    }
  }), err && React.createElement('p', {
    style: {
      margin: '8px 0 0',
      color: 'var(--text-secondary)',
      font: '400 12px/16px var(--font-sans)'
    }
  }, err), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 10,
      font: '500 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)',
      flexWrap: 'wrap'
    }
  }, React.createElement('span', null, legendLabel), breaks.map((b, i) => React.createElement('span', {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('i', {
    style: {
      width: 28,
      height: 10,
      display: 'inline-block',
      background: seq[i]
    }
  }), i < breaks.length - 1 ? b + '\u2013' + (breaks[i + 1] - 1) : '\u2265 ' + b))));
}
Object.assign(__ds_scope, { PetaWilayah });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/peta/PetaWilayah.jsx", error: String((e && e.message) || e) }); }

// components/status/StatusBadge.jsx
try { (() => {
const STATUS = {
  S01: ['Draft', 'Belum diajukan', 'neutral'],
  S02: ['Verifikasi Administrasi', 'Sedang diperiksa', 'primary'],
  S03: ['Perlu Revisi Administrasi', 'Perlu perbaikan dokumen', 'warning'],
  S04: ['Penilaian RAB', 'Survei & penilaian RAB', 'primary'],
  S05: ['Perlu Revisi RAB', 'Perlu perbaikan RAB', 'warning'],
  S06: ['Persiapan PKS', 'Penyiapan kontrak', 'primary'],
  S07: ['Persetujuan Akhir', 'Menunggu persetujuan', 'primary'],
  S08: ['Menunggu Pencairan', 'Disetujui, menunggu dana', 'success'],
  S09: ['Dana Tersalurkan', 'Dana sudah ditransfer', 'success'],
  S10: ['Pelaksanaan', 'Pelaksanaan pembangunan', 'primary'],
  S11: ['Addendum Diajukan', 'Perpanjangan diproses', 'warning'],
  S12: ['Sanksi / Dihentikan', 'Pekerjaan dihentikan', 'danger'],
  S13: ['Selesai', 'Selesai 100%', 'success'],
  S14: ['Ditolak', 'Tidak dapat dilanjutkan', 'danger']
};
const TONE = {
  neutral: {
    background: 'var(--neutral-subtle)',
    color: 'var(--text-secondary)'
  },
  primary: {
    background: 'var(--primary-subtle)',
    color: 'var(--primary)'
  },
  warning: {
    background: 'var(--warning-subtle)',
    color: 'var(--warning-text)'
  },
  success: {
    background: 'var(--success-subtle)',
    color: 'var(--success-text)'
  },
  danger: {
    background: 'var(--danger-subtle)',
    color: 'var(--danger-text)'
  }
};
function StatusBadge({
  code,
  audience = 'internal',
  tone,
  children,
  style
}) {
  const def = code ? STATUS[code] : null;
  const t = tone || (def ? def[2] : 'neutral');
  const label = children != null ? children : def ? audience === 'sekolah' ? def[1] : def[0] : '';
  return React.createElement('span', {
    style: Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 10px',
      borderRadius: 'var(--radius-full)',
      font: '500 12px/20px var(--font-sans)',
      whiteSpace: 'nowrap'
    }, TONE[t] || TONE.neutral, style)
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      flex: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { STATUS, StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/status/SlaChip.jsx
try { (() => {
function SlaChip({
  days,
  unit = 'hari'
}) {
  const tone = days < 0 ? 'danger' : days <= 1 ? 'warning' : 'neutral';
  const label = days < 0 ? 'Lewat ' + Math.abs(days) + ' ' + unit : days === 0 ? 'Batas hari ini' : 'Sisa ' + days + ' ' + unit;
  return React.createElement(__ds_scope.StatusBadge, {
    tone
  }, label);
}
Object.assign(__ds_scope, { SlaChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/SlaChip.jsx", error: String((e && e.message) || e) }); }

// components/data/QueueTable.jsx
try { (() => {
const th = {
  background: 'var(--surface-muted)',
  textAlign: 'left',
  font: '600 12px/16px var(--font-sans)',
  color: 'var(--text-secondary)',
  padding: '10px 12px',
  borderBottom: '1px solid var(--border)'
};
const td = {
  padding: '10px 12px',
  borderBottom: '1px solid var(--border)',
  font: '400 14px/20px var(--font-sans)',
  color: 'var(--text-primary)',
  background: 'var(--surface)'
};
const num = {
  textAlign: 'right',
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap'
};
function formatRupiah(n) {
  return 'Rp ' + Number(n).toLocaleString('id-ID');
}
function QueueTable({
  rows = [],
  valueLabel = 'Nilai usulan',
  showStatus = false,
  statusAudience = 'internal',
  pageSize = 25,
  onRowClick,
  sortBySla = true
}) {
  const [page, setPage] = React.useState(0);
  const sorted = sortBySla ? rows.slice().sort((a, b) => a.slaDays - b.slaDays) : rows;
  const pages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const view = sorted.slice(page * pageSize, page * pageSize + pageSize);
  const pbtn = dis => ({
    font: '600 13px/20px var(--font-sans)',
    color: dis ? 'var(--text-secondary)' : 'var(--primary)',
    background: 'var(--surface)',
    border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-md)',
    padding: '4px 12px',
    cursor: dis ? 'not-allowed' : 'pointer'
  });
  return React.createElement('div', {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, React.createElement('th', {
    style: th
  }, 'NPSN'), React.createElement('th', {
    style: th
  }, 'Sekolah'), React.createElement('th', {
    style: th
  }, 'Kab/Kota'), showStatus && React.createElement('th', {
    style: th
  }, 'Status'), React.createElement('th', {
    style: Object.assign({}, th, {
      textAlign: 'right'
    })
  }, valueLabel), React.createElement('th', {
    style: th
  }, 'SLA'))), React.createElement('tbody', null, view.map((r, i) => React.createElement('tr', {
    key: r.npsn || i,
    className: onRowClick ? 'rv-row' : undefined,
    onClick: onRowClick ? () => onRowClick(r) : undefined
  }, React.createElement('td', {
    style: Object.assign({}, td, {
      fontVariantNumeric: 'tabular-nums'
    })
  }, r.npsn), React.createElement('td', {
    style: td
  }, r.sekolah), React.createElement('td', {
    style: Object.assign({}, td, {
      color: 'var(--text-secondary)'
    })
  }, r.wilayah), showStatus && React.createElement('td', {
    style: td
  }, React.createElement(__ds_scope.StatusBadge, {
    code: r.status,
    audience: statusAudience
  })), React.createElement('td', {
    style: Object.assign({}, td, num)
  }, formatRupiah(r.nilai)), React.createElement('td', {
    style: td
  }, React.createElement(__ds_scope.SlaChip, {
    days: r.slaDays
  })))))), sorted.length > pageSize && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 12px',
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, React.createElement('span', null, page * pageSize + 1 + '–' + Math.min(sorted.length, (page + 1) * pageSize) + ' dari ' + sorted.length.toLocaleString('id-ID')), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 8
    }
  }, React.createElement('button', {
    type: 'button',
    className: 'rv-focus',
    disabled: page === 0,
    onClick: () => setPage(page - 1),
    style: pbtn(page === 0)
  }, 'Sebelumnya'), React.createElement('button', {
    type: 'button',
    className: 'rv-focus',
    disabled: page >= pages - 1,
    onClick: () => setPage(page + 1),
    style: pbtn(page >= pages - 1)
  }, 'Berikutnya'))));
}
Object.assign(__ds_scope, { formatRupiah, QueueTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/QueueTable.jsx", error: String((e && e.message) || e) }); }

// components/umpan-balik/ReviewerNote.jsx
try { (() => {
function ReviewerNote({
  title = 'Perlu perbaikan dokumen',
  count,
  children,
  author,
  role,
  date,
  linkLabel,
  onLink
}) {
  const meta = [author && role ? author + ', ' + role : author, date].filter(Boolean);
  return React.createElement('div', {
    role: 'note',
    style: {
      background: 'var(--warning-subtle)',
      border: '1px solid var(--warning)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px'
    }
  }, React.createElement('p', {
    style: {
      font: '600 14px/20px var(--font-sans)',
      color: 'var(--warning-text)',
      margin: '0 0 4px'
    }
  }, title, count != null ? ' \u00b7 ' + count + ' item' : ''), React.createElement('p', {
    style: {
      margin: 0,
      font: '400 14px/22px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, children), (meta.length || linkLabel) && React.createElement('div', {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, meta.join(' \u00b7 '), linkLabel && React.createElement(React.Fragment, null, meta.length ? ' \u00b7 ' : '', React.createElement('a', {
    href: '#',
    className: 'rv-link',
    onClick: e => {
      e.preventDefault();
      onLink && onLink();
    },
    style: {
      fontWeight: 600
    }
  }, linkLabel))));
}
Object.assign(__ds_scope, { ReviewerNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/umpan-balik/ReviewerNote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/DashboardScreen.jsx
try { (() => {
const {
  PaguCard: PC,
  GrafikBatang: GB,
  GrafikGaris: GG,
  GrafikPai: GP,
  PetaWilayah: PW
} = window.RevitDesignSystem_e94b7b;
function DashboardScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h1"
  }, "Dashboard nasional"), /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Per 4 Okt 2026 \xB7 data contoh")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PC, {
    label: "Pagu total",
    value: "Rp 13,2 T",
    note: "Tahun anggaran 2026"
  }), /*#__PURE__*/React.createElement(PC, {
    label: "Dicadangkan",
    value: "Rp 1,1 T",
    note: "S06\u2013S07"
  }), /*#__PURE__*/React.createElement(PC, {
    label: "Terikat",
    value: "Rp 4,2 T",
    note: "S08\u2013S13"
  }), /*#__PURE__*/React.createElement(PC, {
    label: "Sisa",
    value: "Rp 7,9 T",
    note: "Tersedia",
    tone: "success"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,3fr) minmax(0,2fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(PW, {
    geojsonUrl: "../../assets/maps/indonesia-provinsi-contoh.json",
    height: 300
  }), /*#__PURE__*/React.createElement(GP, {
    title: "Status verifikasi lintas lembaga",
    subtitle: "12.450 proposal aktif",
    size: 180,
    labels: ['Terverifikasi', 'Dalam proses', 'Belum diverifikasi'],
    values: [8093, 3112, 1245]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(GB, {
    title: "Proposal per tahap",
    subtitle: "Per 4 Okt 2026",
    labels: ['Verifikasi administrasi', 'Penilaian RAB', 'Persiapan PKS', 'Persetujuan akhir', 'Menunggu pencairan', 'Pelaksanaan'],
    values: [3120, 2480, 1340, 610, 1980, 2920]
  }), /*#__PURE__*/React.createElement(GG, {
    title: "Proposal masuk dan disetujui per minggu",
    subtitle: "Agustus\u2013Oktober 2026",
    labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
    series: [{
      label: 'Masuk',
      data: [420, 880, 1310, 1620, 1540, 1720, 1490, 1380, 1260, 1180]
    }, {
      label: 'Disetujui',
      data: [0, 40, 180, 420, 690, 880, 1010, 1120, 1190, 1240]
    }]
  })));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/LoginScreen.jsx
try { (() => {
const {
  BrandLockup: BL,
  TextField: TF,
  OtpInput: OI,
  Button: BtnL
} = window.RevitDesignSystem_e94b7b;
function LoginScreen({
  onLogin
}) {
  const [step, setStep] = React.useState(1);
  const [portal, setPortal] = React.useState('sekolah');
  const [npsn, setNpsn] = React.useState('99990101');
  const [err, setErr] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--background)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(BL, {
    emblemSrc: EMBLEM,
    size: 48,
    portal: "Satu pintu bantuan revitalisasi sekolah"
  }), step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h2"
  }, "Masuk"), /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Pilih portal Anda.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['sekolah', 'Sekolah'], ['setpres', 'Setpres'], ['pimpinan', 'Pimpinan']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "rv-focus",
    onClick: () => setPortal(k),
    style: {
      flex: 1,
      padding: '8px 0',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      font: '600 14px/20px var(--font-sans)',
      border: '1px solid ' + (portal === k ? 'var(--primary)' : 'var(--border-strong)'),
      background: portal === k ? 'var(--primary-subtle)' : 'var(--surface)',
      color: portal === k ? 'var(--primary)' : 'var(--text-primary)'
    }
  }, l))), /*#__PURE__*/React.createElement(TF, {
    label: portal === 'sekolah' ? 'NPSN' : 'Email dinas',
    value: portal === 'sekolah' ? npsn : 'rina.k@setneg.go.id',
    onChange: e => setNpsn(e.target.value),
    helper: portal === 'sekolah' ? '8 angka, sesuai data Kemendikdasmen' : undefined,
    error: err
  }), /*#__PURE__*/React.createElement(BtnL, {
    fullWidth: true,
    size: "touch",
    onClick: () => {
      if (portal === 'sekolah' && !/^\d{8}$/.test(npsn)) {
        setErr('NPSN harus 8 angka.');
        return;
      }
      setErr(null);
      setStep(2);
    }
  }, "Lanjut")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h2"
  }, "Kode autentikasi"), /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Buka aplikasi authenticator di ponsel Anda.")), /*#__PURE__*/React.createElement(OI, {
    title: "Masukkan kode dari aplikasi authenticator",
    onComplete: () => onLogin(portal)
  }), /*#__PURE__*/React.createElement(BtnL, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "Kembali"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/QueueScreen.jsx
try { (() => {
const {
  QueueTable: QT,
  StatusBadge: SBQ,
  SlaChip: SCQ,
  Button: BtnQ,
  ReviewerNote: RNQ,
  formatRupiah
} = window.RevitDesignSystem_e94b7b;
const QUEUE = [{
  npsn: '99990101',
  sekolah: 'SD Negeri Sukamaju 01',
  wilayah: 'Kab. Bogor',
  nilai: 658277000,
  slaDays: -2,
  status: 'S02'
}, {
  npsn: '99990102',
  sekolah: 'SD Negeri Margahayu 03',
  wilayah: 'Kab. Bandung',
  nilai: 512400000,
  slaDays: 1,
  status: 'S02'
}, {
  npsn: '99990103',
  sekolah: 'SD Negeri Tegalrejo 2',
  wilayah: 'Kota Yogyakarta',
  nilai: 734950000,
  slaDays: 3,
  status: 'S02'
}, {
  npsn: '99990104',
  sekolah: 'SMP Negeri 4 Karanganyar',
  wilayah: 'Kab. Karanganyar',
  nilai: 921300000,
  slaDays: 2,
  status: 'S02'
}, {
  npsn: '99990105',
  sekolah: 'SD Negeri Lamteh',
  wilayah: 'Kota Banda Aceh',
  nilai: 447800000,
  slaDays: 0,
  status: 'S02'
}];
const CHECK = ['SK Panitia', 'Surat pernyataan kepala sekolah', 'Foto kondisi', 'Denah sekolah', 'RAB awal', 'Rekening sekolah', 'NIK ketua panitia'];
function QueueScreen() {
  const [open, setOpen] = React.useState(null);
  const [res, setRes] = React.useState({});
  if (open) {
    const ok = Object.values(res).filter(x => x === 'ok').length,
      bad = Object.values(res).filter(x => x === 'bad').length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 960
      }
    }, /*#__PURE__*/React.createElement(BtnQ, {
      variant: "ghost",
      onClick: () => {
        setOpen(null);
        setRes({});
      },
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "ArrowLeft",
        size: 16
      }),
      style: {
        alignSelf: 'flex-start'
      }
    }, "Antrian"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "h1"
    }, open.sekolah), /*#__PURE__*/React.createElement("div", {
      className: "body",
      style: {
        color: 'var(--text-secondary)'
      }
    }, "NPSN ", open.npsn, " \xB7 ", open.wilayah, " \xB7 Nilai usulan ", formatRupiah(open.nilai))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(SBQ, {
      code: open.status
    }), /*#__PURE__*/React.createElement(SCQ, {
      days: open.slaDays
    }))), /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "h3"
    }, "Kelengkapan dokumen"), /*#__PURE__*/React.createElement("span", {
      className: "body",
      style: {
        color: 'var(--text-secondary)'
      }
    }, ok, " sesuai, ", bad, " tidak sesuai.")), CHECK.map(c => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "FileText",
      size: 20,
      color: "var(--text-secondary)"
    }), c), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, [['ok', 'Sesuai'], ['bad', 'Tidak sesuai']].map(([k, l]) => /*#__PURE__*/React.createElement(BtnQ, {
      key: k,
      variant: res[c] === k ? k === 'ok' ? 'primary' : 'danger' : 'secondary',
      onClick: () => setRes(Object.assign({}, res, {
        [c]: k
      })),
      style: {
        minHeight: 32,
        padding: '5px 12px'
      }
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(BtnQ, {
      variant: "secondary",
      disabled: !bad
    }, "Minta perbaikan"), /*#__PURE__*/React.createElement(BtnQ, {
      disabled: ok < CHECK.length,
      disabledReason: ok < CHECK.length ? 'Periksa semua ' + CHECK.length + ' dokumen terlebih dahulu.' : undefined
    }, "Kirim keputusan")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "h1"
  }, "Antrian verifikasi administrasi"), /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      color: 'var(--text-secondary)'
    }
  }, QUEUE.length, " proposal \xB7 urut sisa SLA terkecil")), /*#__PURE__*/React.createElement(BtnQ, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "Download",
      size: 16
    })
  }, "Unduh daftar")), /*#__PURE__*/React.createElement(QT, {
    rows: QUEUE,
    showStatus: true,
    onRowClick: setOpen
  }));
}
window.QueueScreen = QueueScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/QueueScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Shell.jsx
try { (() => {
const {
  BrandLockup
} = window.RevitDesignSystem_e94b7b;
const EMBLEM = '../../assets/logo-setneg-ri.svg';
function Icon({
  name,
  size = 20,
  color = 'currentColor'
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const node = window.lucide.icons[name];
    if (!node) return;
    const svg = window.lucide.createElement(node);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke', color);
    svg.setAttribute('stroke-width', 2);
    el.appendChild(svg);
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none'
    }
  });
}
function Sidebar({
  items,
  active,
  onNav,
  portal
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: 'none',
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(BrandLockup, {
    emblemSrc: EMBLEM,
    size: 36,
    portal: portal
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: "rv-focus",
      onClick: () => onNav(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'var(--primary-subtle)' : 'transparent',
        color: on ? 'var(--primary)' : 'var(--text-primary)',
        font: (on ? '600' : '500') + ' 14px/20px var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 20
    }), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        font: '600 12px/16px var(--font-sans)',
        color: 'var(--text-secondary)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.count));
  })));
}
function TopBar({
  title,
  crumb,
  user,
  role,
  onLogout
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, crumb), /*#__PURE__*/React.createElement("div", {
    className: "h3"
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/20px var(--font-sans)'
    }
  }, user), /*#__PURE__*/React.createElement("div", {
    className: "caption",
    style: {
      color: 'var(--text-secondary)'
    }
  }, role)), /*#__PURE__*/React.createElement("button", {
    className: "rv-focus",
    onClick: onLogout,
    title: "Keluar",
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "LogOut",
    size: 20
  }))));
}
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: Object.assign({
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 24
    }, style)
  }, children);
}
Object.assign(window, {
  Icon,
  Sidebar,
  TopBar,
  Card,
  EMBLEM
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/WizardScreen.jsx
try { (() => {
const {
  WizardStepper: WS,
  ReviewerNote: RN,
  TextField: TFW,
  Button: BtnW,
  StatusBadge: SBW
} = window.RevitDesignSystem_e94b7b;
function WizardScreen() {
  const [step, setStep] = React.useState(1);
  const [saved, setSaved] = React.useState('10.42');
  const [done, setDone] = React.useState(false);
  const labels = ['Informasi & SK', 'Narasi proposal', 'Foto', 'RAB', 'Tinjau'];
  const steps = labels.map((l, i) => ({
    label: l,
    state: i === step ? 'active' : i === 2 ? 'revisi' : i < step ? 'done' : 'todo'
  }));
  const touch = () => {
    const d = new Date();
    setSaved(String(d.getHours()).padStart(2, '0') + '.' + String(d.getMinutes()).padStart(2, '0'));
  };
  if (done) return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SBW, {
    code: "S02",
    audience: "sekolah"
  }), /*#__PURE__*/React.createElement("div", {
    className: "h2"
  }, "Proposal berhasil diajukan."), /*#__PURE__*/React.createElement("div", {
    className: "body-lg",
    style: {
      color: 'var(--text-secondary)'
    }
  }, "Setpres akan memeriksa dokumen Anda dalam 3 hari kerja."), /*#__PURE__*/React.createElement(BtnW, {
    variant: "secondary",
    onClick: () => {
      setDone(false);
      setStep(0);
    }
  }, "Lihat proposal")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(WS, {
    steps: steps,
    savedAt: 'Tersimpan pukul ' + saved,
    onStepClick: setStep
  }), step === 2 && /*#__PURE__*/React.createElement(RN, {
    count: 1,
    author: "Rina Kartikasari",
    role: "Setpres Kelengkapan",
    date: "7 Okt 2026",
    linkLabel: "Buka bagian Foto"
  }, "Foto ruang kelas 3 buram. Unggah ulang foto yang jelas dari depan ruangan."), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "h2"
  }, labels[step]), step === 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TFW, {
    label: "NPSN",
    defaultValue: "99990101",
    disabled: true,
    helper: "Diambil dari data Kemendikdasmen"
  }), /*#__PURE__*/React.createElement(TFW, {
    label: "Nama ketua panitia",
    defaultValue: "Siti Rahmawati",
    onChange: touch
  }), /*#__PURE__*/React.createElement(TFW, {
    label: "NIK Ketua Panitia",
    defaultValue: "3201011202000001",
    onChange: touch,
    inputMode: "numeric"
  })), step === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TFW, {
    label: "Judul proposal",
    defaultValue: "Rehabilitasi 3 ruang kelas dan toilet",
    onChange: touch
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '600 14px/20px var(--font-sans)',
      marginBottom: 6
    }
  }, "Kondisi saat ini"), /*#__PURE__*/React.createElement("textarea", {
    className: "rv-input",
    onChange: touch,
    defaultValue: "Atap ruang kelas 3 bocor saat hujan. Lantai retak di dua ruang kelas.",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 120,
      font: '400 16px/24px var(--font-sans)',
      padding: '10px 12px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      background: 'var(--surface)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/16px var(--font-sans)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Ceritakan kerusakan dan dampaknya bagi murid."))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12
    }
  }, ['Ruang kelas 1', 'Ruang kelas 2', 'Ruang kelas 3'].map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      border: '1px ' + (i === 2 ? 'solid var(--warning)' : 'dashed var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      height: 120,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      color: 'var(--text-secondary)',
      background: i === 2 ? 'var(--warning-subtle)' : 'var(--surface-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ImagePlus",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, l, i === 2 ? ' · perlu diganti' : '')))), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['Pekerjaan atap', 248500000], ['Lantai keramik', 186777000], ['Toilet murid', 223000000]].map(([l, n]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border)',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, "Rp ", n.toLocaleString('id-ID')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, "Rp 658.277.000"))), step === 4 && /*#__PURE__*/React.createElement("div", {
    className: "body-lg"
  }, "Periksa kembali semua bagian. Setelah diajukan, proposal tidak dapat diubah kecuali Setpres meminta perbaikan.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(BtnW, {
    variant: "ghost",
    disabled: step === 0,
    onClick: () => setStep(step - 1)
  }, "Kembali"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BtnW, {
    variant: "secondary",
    onClick: touch
  }, "Simpan draft"), step < 4 ? /*#__PURE__*/React.createElement(BtnW, {
    onClick: () => setStep(step + 1)
  }, "Lanjut") : /*#__PURE__*/React.createElement(BtnW, {
    onClick: () => setDone(true)
  }, "Ajukan proposal"))));
}
window.WizardScreen = WizardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/WizardScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PaguCard = __ds_scope.PaguCard;

__ds_ns.QueueTable = __ds_scope.QueueTable;

__ds_ns.OtpInput = __ds_scope.OtpInput;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.GrafikBatang = __ds_scope.GrafikBatang;

__ds_ns.GrafikGaris = __ds_scope.GrafikGaris;

__ds_ns.GrafikPai = __ds_scope.GrafikPai;

__ds_ns.BrandLockup = __ds_scope.BrandLockup;

__ds_ns.WizardStepper = __ds_scope.WizardStepper;

__ds_ns.PetaWilayah = __ds_scope.PetaWilayah;

__ds_ns.SlaChip = __ds_scope.SlaChip;

__ds_ns.STATUS = __ds_scope.STATUS;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.ReviewerNote = __ds_scope.ReviewerNote;

})();
