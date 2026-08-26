import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: '⚡ SYS_INIT: Neural Core v4.8 online. Protocol: SECURE_SHELL.'
    },
    {
      type: 'system',
      text: 'Type "help" or click the chips below to explore system telemetry.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState([]);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on output update
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    // Record in command history
    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: cmd }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (trimmed === 'date') {
      newHistory.push({
        type: 'output',
        text: `CURRENT SYSTEM TIME: ${new Date().toUTCString()} (UTC+7 Local: ${new Date().toLocaleString()})`
      });
    } else if (portfolioData.terminalCommands[trimmed]) {
      newHistory.push({
        type: 'output',
        text: portfolioData.terminalCommands[trimmed]
      });
    } else if (trimmed === 'matrix') {
      newHistory.push({
        type: 'output',
        text: "🟢 WAKE UP, NEO...\nMatrix subroutine initialized. You're viewing a high-tech React interface."
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `command not found: "${trimmed}". Type "help" to view available commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickChips = ['help', 'whoami', 'skills', 'projects', 'contact', 'stats', 'clear'];

  return (
    <div className="terminal-card" onClick={() => inputRef.current?.focus()}>
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">
          <TerminalIcon size={14} />
          <span>panji@quantum-node:~$</span>
        </div>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>zsh 5.9</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((item, idx) => (
          <div key={idx} className="terminal-output-item">
            {item.type === 'input' && (
              <div className="terminal-cmd-echo">
                <span>❯</span> {item.text}
              </div>
            )}
            {item.type === 'system' && (
              <div style={{ color: 'var(--accent-secondary)', fontStyle: 'italic' }}>
                {item.text}
              </div>
            )}
            {item.type === 'output' && (
              <div className="terminal-response">{item.text}</div>
            )}
            {item.type === 'error' && (
              <div style={{ color: '#ff5f56' }}>{item.text}</div>
            )}
          </div>
        ))}

        {/* Live Input Prompt */}
        <div className="terminal-input-row">
          <span className="terminal-prompt">❯</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            autoComplete="off"
            spellCheck="false"
          />
          <CornerDownLeft size={14} style={{ opacity: 0.5 }} />
        </div>
      </div>

      {/* Quick Interactive Command Chips */}
      <div className="terminal-chips">
        {quickChips.map((cmd) => (
          <button
            key={cmd}
            className="terminal-chip"
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(cmd);
            }}
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
