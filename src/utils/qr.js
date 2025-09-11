import QRCode from 'qrcode';
import crypto from 'crypto';
import { env } from '../config/env.js';

export function signTicket(ticketId) {
  const h = crypto.createHmac('sha256', env.qrSigningSecret);
  h.update(ticketId);
  return h.digest('hex');
}

export function buildQrPayload(ticketId) {
  return JSON.stringify({ t: ticketId, s: signTicket(ticketId) });
}

export async function generateQrPngBuffer(payload) {
  return await QRCode.toBuffer(payload, { type: 'png', width: 512, margin: 1 });
}