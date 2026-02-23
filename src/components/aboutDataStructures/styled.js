import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 48px;
        box-shadow: 0 14px 40px var(--color-shadow);
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 55px var(--color-shadow);
            border-color: var(--color-border-light);
        }

        .header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 28px;
        }

        .iconBox {
            width: 44px;
            height: 44px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            svg {
                font-size: 20px;
            }
        }

        &:hover .iconBox {
            transform: scale(1.05) rotate(-1deg);
            border-color: var(--color-border-light);
        }

        .title {
            font-size: 32px;
            font-weight: 800;
            letter-spacing: 0.4px;
            color: var(--color-primary);
        }

        p {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 20px;
            color: var(--color-text-secondary);
        }

        .metaRow {
            margin-top: 30px;
            padding-top: 18px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
        }

        .metaItem {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-muted);
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                color 0.2s ease;

            svg {
                color: var(--color-accent);
            }

            &:hover {
                transform: translateY(-2px);
                color: var(--color-text-primary);
            }
        }

        .metaBar {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            flex-wrap: wrap;
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            width: 26px;
            height: 26px;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
            color: var(--color-primary);
            display: grid;
            place-items: center;

            svg {
                font-size: 14px;
            }
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
            letter-spacing: 0.2px;
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
            transform: translateY(0);
            transition:
                transform 0.2s ease,
                border-color 0.2s ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }
        }

        @media (max-width: 768px) {
            padding: 28px;

            .title {
                font-size: 24px;
            }
        }
    `,
};
