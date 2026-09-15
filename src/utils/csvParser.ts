import { Student } from '../types';

export interface SimulatedPreset {
  id: string;
  title: string;
  description: string;
  count: number;
  students: Student[];
}

export const SAMPLE_STUDENTS: Student[] = [
  { id: 'sample-1', seatNumber: 1, name: '陳子豪' },
  { id: 'sample-2', seatNumber: 2, name: '林若曦' },
  { id: 'sample-3', seatNumber: 3, name: '張宇廷' },
  { id: 'sample-4', seatNumber: 4, name: '李佳蓉' },
  { id: 'sample-5', seatNumber: 5, name: '王俊傑' },
  { id: 'sample-6', seatNumber: 6, name: '黃詩涵' },
  { id: 'sample-7', seatNumber: 7, name: '吳冠宇' },
  { id: 'sample-8', seatNumber: 8, name: '劉雅婷' },
  { id: 'sample-9', seatNumber: 9, name: '楊承翰' },
  { id: 'sample-10', seatNumber: 10, name: '蔡孟璇' },
  { id: 'sample-11', seatNumber: 11, name: '許家維' },
  { id: 'sample-12', seatNumber: 12, name: '鄭安琪' },
  { id: 'sample-13', seatNumber: 13, name: '謝政廷' },
  { id: 'sample-14', seatNumber: 14, name: '洪詠晴' },
  { id: 'sample-15', seatNumber: 15, name: '郭品妤' },
  { id: 'sample-16', seatNumber: 16, name: '邱柏宇' },
  { id: 'sample-17', seatNumber: 17, name: '曾韋翔' },
  { id: 'sample-18', seatNumber: 18, name: '廖欣儀' },
  { id: 'sample-19', seatNumber: 19, name: '賴柏霖' },
  { id: 'sample-20', seatNumber: 20, name: '徐羽涵' },
  { id: 'sample-21', seatNumber: 21, name: '周宗翰' },
  { id: 'sample-22', seatNumber: 22, name: '葉芷琪' },
  { id: 'sample-23', seatNumber: 23, name: '蘇育賢' },
  { id: 'sample-24', seatNumber: 24, name: '莊凱婷' },
  { id: 'sample-25', seatNumber: 25, name: '江奕廷' },
  { id: 'sample-26', seatNumber: 26, name: '何雨軒' },
  { id: 'sample-27', seatNumber: 27, name: '蕭佩萱' },
  { id: 'sample-28', seatNumber: 28, name: '彭郁婷' },
];

export const SIMULATED_ROSTER_PRESETS: SimulatedPreset[] = [
  {
    id: 'standard-class',
    title: '標準中小學班級',
    description: '28 位完整座號與姓名，適合完整體驗抽籤與多組別自動分組。',
    count: 28,
    students: SAMPLE_STUDENTS,
  },
  {
    id: 'seminar-group',
    title: '精緻研討小班',
    description: '12 位學生名單，適合快速測試 3~4 人一組或快速點名。',
    count: 12,
    students: [
      { id: 'sem-1', seatNumber: 1, name: '陳子豪' },
      { id: 'sem-2', seatNumber: 2, name: '林若曦' },
      { id: 'sem-3', seatNumber: 3, name: '張宇廷' },
      { id: 'sem-4', seatNumber: 4, name: '李佳蓉' },
      { id: 'sem-5', seatNumber: 5, name: '王俊傑' },
      { id: 'sem-6', seatNumber: 6, name: '黃詩涵' },
      { id: 'sem-7', seatNumber: 7, name: '吳冠宇' },
      { id: 'sem-8', seatNumber: 8, name: '劉雅婷' },
      { id: 'sem-9', seatNumber: 9, name: '楊承翰' },
      { id: 'sem-10', seatNumber: 10, name: '蔡孟璇' },
      { id: 'sem-11', seatNumber: 11, name: '許家維' },
      { id: 'sem-12', seatNumber: 12, name: '鄭安琪' },
    ],
  },
  {
    id: 'duplicate-test',
    title: '含重複姓名測試名單',
    description: '共 16 筆，內含 4 處重複姓名（如陳子豪、黃詩涵），供測試重複標記與一鍵去重。',
    count: 16,
    students: [
      { id: 'dup-1', seatNumber: 1, name: '陳子豪' },
      { id: 'dup-2', seatNumber: 2, name: '林若曦' },
      { id: 'dup-3', seatNumber: 3, name: '陳子豪' }, // Duplicate
      { id: 'dup-4', seatNumber: 4, name: '李佳蓉' },
      { id: 'dup-5', seatNumber: 5, name: '黃詩涵' },
      { id: 'dup-6', seatNumber: 6, name: '王俊傑' },
      { id: 'dup-7', seatNumber: 7, name: '黃詩涵' }, // Duplicate
      { id: 'dup-8', seatNumber: 8, name: '吳冠宇' },
      { id: 'dup-9', seatNumber: 9, name: '張宇廷' },
      { id: 'dup-10', seatNumber: 10, name: '張宇廷' }, // Duplicate
      { id: 'dup-11', seatNumber: 11, name: '劉雅婷' },
      { id: 'dup-12', seatNumber: 12, name: '楊承翰' },
      { id: 'dup-13', seatNumber: 13, name: '蔡孟璇' },
      { id: 'dup-14', seatNumber: 14, name: '蔡孟璇' }, // Duplicate
      { id: 'dup-15', seatNumber: 15, name: '許家維' },
      { id: 'dup-16', seatNumber: 16, name: '鄭安琪' },
    ],
  },
];

/**
 * Identify duplicate names in an array of names.
 * Returns a Set containing names that appear more than once.
 */
export function getDuplicateNamesSet(names: string[]): Set<string> {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const name of names) {
    const trimmed = name.trim();
    if (!trimmed) continue;
    if (seen.has(trimmed)) {
      duplicates.add(trimmed);
    } else {
      seen.add(trimmed);
    }
  }

  return duplicates;
}

/**
 * Remove duplicate students while preserving the first appearance.
 */
export function removeDuplicatesFromStudents(students: Student[]): {
  unique: Student[];
  removedCount: number;
  removedNames: string[];
} {
  const seen = new Set<string>();
  const unique: Student[] = [];
  const removedNames: string[] = [];

  for (const student of students) {
    const trimmed = student.name.trim();
    if (!seen.has(trimmed)) {
      seen.add(trimmed);
      unique.push(student);
    } else {
      removedNames.push(trimmed);
    }
  }

  return {
    unique,
    removedCount: removedNames.length,
    removedNames,
  };
}

/**
 * Remove duplicate rows in CSV based on the name column
 */
export function removeDuplicatesFromCSVRows(
  rows: string[][],
  nameColIdx: number
): {
  uniqueRows: string[][];
  removedCount: number;
} {
  const seen = new Set<string>();
  const uniqueRows: string[][] = [];
  let removedCount = 0;

  for (const row of rows) {
    const name = row[nameColIdx]?.trim();
    if (!name) continue;

    if (!seen.has(name)) {
      seen.add(name);
      uniqueRows.push(row);
    } else {
      removedCount++;
    }
  }

  return { uniqueRows, removedCount };
}

/**
 * Parses raw text input into a student list.
 * Can handle newlines, commas, tabs, spaces.
 */
export function parseRawTextToStudents(text: string): Student[] {
  if (!text || !text.trim()) return [];

  const lines = text
    .split(/[\r\n,;]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const students: Student[] = [];
  let seat = 1;

  for (const line of lines) {
    const match = line.match(/^(\d+)[\s.、_-]+(.+)$/);
    if (match) {
      const parsedSeat = parseInt(match[1], 10);
      const name = match[2].trim();
      if (name) {
        students.push({
          id: `std-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
          seatNumber: isNaN(parsedSeat) ? seat++ : parsedSeat,
          name,
        });
        continue;
      }
    }

    students.push({
      id: `std-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      seatNumber: seat++,
      name: line,
    });
  }

  return students;
}

export interface CSVParseResult {
  headers: string[];
  rows: string[][];
  suggestedNameColumnIndex: number;
  suggestedSeatColumnIndex: number;
}

/**
 * Parses CSV text into rows & columns
 */
export function parseCSV(content: string): CSVParseResult {
  const firstLine = content.split(/\r\n|\n/)[0] || '';
  let delimiter = ',';
  if (firstLine.includes('\t')) delimiter = '\t';
  else if (firstLine.includes(';') && !firstLine.includes(',')) delimiter = ';';

  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentVal = '';
  let insideQuote = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        currentVal += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === delimiter && !insideQuote) {
      currentRow.push(currentVal.trim());
      currentVal = '';
    } else if ((char === '\r' || char === '\n') && !insideQuote) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentVal.trim());
      currentVal = '';
      if (currentRow.some(val => val.length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentVal += char;
    }
  }

  if (currentVal.length > 0 || currentRow.length > 0) {
    currentRow.push(currentVal.trim());
    if (currentRow.some(val => val.length > 0)) {
      rows.push(currentRow);
    }
  }

  if (rows.length === 0) {
    return { headers: [], rows: [], suggestedNameColumnIndex: -1, suggestedSeatColumnIndex: -1 };
  }

  const headers = rows[0];
  const dataRows = rows.slice(1);

  let nameIndex = headers.findIndex(h =>
    /姓名|名字|學生|name|student/i.test(h.replace(/\s+/g, ''))
  );
  if (nameIndex === -1) {
    nameIndex = 0;
  }

  const seatIndex = headers.findIndex(h =>
    /座號|號碼|學號|編號|seat|no|number|id/i.test(h.replace(/\s+/g, ''))
  );

  return {
    headers,
    rows: dataRows.length > 0 ? dataRows : [headers],
    suggestedNameColumnIndex: nameIndex,
    suggestedSeatColumnIndex: seatIndex,
  };
}

export function convertCSVToStudents(
  rows: string[][],
  nameColIdx: number,
  seatColIdx: number = -1
): Student[] {
  const students: Student[] = [];
  let autoSeat = 1;

  rows.forEach((row) => {
    const rawName = row[nameColIdx]?.trim();
    if (!rawName) return;

    let seatNumber = autoSeat++;
    if (seatColIdx >= 0 && row[seatColIdx]) {
      const parsedSeat = parseInt(row[seatColIdx].trim(), 10);
      if (!isNaN(parsedSeat)) {
        seatNumber = parsedSeat;
      }
    }

    students.push({
      id: `std-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      seatNumber,
      name: rawName,
    });
  });

  return students;
}
