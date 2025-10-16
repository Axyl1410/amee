"use client";

import { chains } from "@/lib/ai/chains";
import { cn } from "@/lib/utils";
import { memo, useEffect, useMemo, useState } from "react";
import { ChevronDownIcon } from "./icons";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  Dialog as Modal,
  DialogTrigger as ModalTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

// Regex hoisted to top-level for performance per linter rules
const MAINNET_REGEX = /mainnet|main network|mainnet \(/i;
const TESTNET_REGEX = /testnet/i;

function PureChainSelectorDialog({
  selectedChainId,
  onChainChange,
}: {
  selectedChainId: string;
  onChainChange?: (chainId: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [optimisticChainId, setOptimisticChainId] = useState(selectedChainId);

  useEffect(() => {
    setOptimisticChainId(selectedChainId);
  }, [selectedChainId]);

  const selectedChain = useMemo(
    () => chains.find((chain) => chain.id === optimisticChainId),
    [optimisticChainId]
  );

  const mainnets = useMemo(
    () => chains.filter((c) => MAINNET_REGEX.test(c.description)),
    []
  );
  const testnets = useMemo(
    () => chains.filter((c) => TESTNET_REGEX.test(c.description)),
    []
  );

  return (
    <Modal onOpenChange={setOpen} open={open}>
      <ModalTrigger asChild>
        <Button
          className="flex h-8 items-center gap-2 rounded-lg px-2"
          type="button"
          variant="ghost"
        >
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary font-bold text-[10px] text-primary-foreground">
            {selectedChain?.chainId.slice(2, 4).toUpperCase()}
          </div>
          <span className="hidden font-medium text-xs sm:block">
            {selectedChain?.name}
          </span>
          <ChevronDownIcon size={16} />
        </Button>
      </ModalTrigger>
      <DialogContent className="w-full max-w-2xl p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Select a network</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-2 font-semibold text-muted-foreground text-xs uppercase">
                Mainnets
              </div>
              <Separator className="mb-3" />
              <ScrollArea className="h-64 pr-2">
                <div className="flex flex-col gap-1">
                  {mainnets.map((chain) => (
                    <button
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-accent",
                        chain.id === optimisticChainId && "bg-accent"
                      )}
                      key={chain.id}
                      onClick={() => {
                        setOptimisticChainId(chain.id);
                        onChainChange?.(chain.id);
                        setOpen(false);
                      }}
                      type="button"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary font-bold text-[10px] text-primary-foreground">
                          {chain.chainId.slice(2, 4).toUpperCase()}
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="truncate font-medium text-xs">
                            {chain.name}
                          </span>
                          <span className="truncate text-[10px] text-muted-foreground leading-tight">
                            {chain.description} • {chain.chainId}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div>
              <div className="mb-2 font-semibold text-muted-foreground text-xs uppercase">
                Testnets
              </div>
              <Separator className="mb-3" />
              <ScrollArea className="h-64 pr-2">
                <div className="flex flex-col gap-1">
                  {testnets.map((chain) => (
                    <button
                      className={cn(
                        "flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-accent",
                        chain.id === optimisticChainId && "bg-accent"
                      )}
                      key={chain.id}
                      onClick={() => {
                        setOptimisticChainId(chain.id);
                        onChainChange?.(chain.id);
                        setOpen(false);
                      }}
                      type="button"
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary font-bold text-[10px] text-primary-foreground">
                          {chain.chainId.slice(2, 4).toUpperCase()}
                        </div>
                        <div className="flex min-w-0 flex-col">
                          <span className="truncate font-medium text-xs">
                            {chain.name}
                          </span>
                          <span className="truncate text-[10px] text-muted-foreground leading-tight">
                            {chain.description} • {chain.chainId}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </DialogContent>
    </Modal>
  );
}

export const ChainSelectorDialog = memo(PureChainSelectorDialog);
