window.PAPER_DATA_UPDATED_AT = "2026-10-27";
window.PAPER_ITEMS = [
  {
    "id": "2610.35868",
    "title": "Retriever-Free Retrieval: Navigating Documents with Decision Models",
    "authors": [
      "Chao Wan",
      "Paul Jünger",
      "Beixi Du",
      "Bodong Liu",
      "Navaneetha Krishnan",
      "Kilian Q. Weinberger"
    ],
    "abstract": "While language models have become dramatically more capable, retrieval still largely relies on lexical matching or similarity in fixed embedding spaces. This creates a capability asymmetry: what the retriever fails to find, even the strongest generator cannot recover. We propose DecisionRAG, which brings the capabilities of pretrained language models to retrieval using decision models that jointly evaluate candidate branches in a single forward pass, without generating any tokens, and show that judging candidates in a shared context makes their relevance estimates comparable. Like a person browsing a library, DecisionRAG navigates the corpus's inherent structure from broad topics down to individual passages, deciding at each level which branches are worth exploring. Without task-specific training or a first-stage retriever, DecisionRAG outperforms dense retrieval with an 8B reranker by 13.8 R@1 points on MultiDoc2Dial and 17.4 Hit@1 points on Natural Questions. Across four benchmarks, including a corpus of 2.68 million Wikipedia paragraphs, retrieval takes just 0.7-1.8 seconds per query.",
    "published": "2026-10-26T17:59:44Z",
    "updated": "2026-10-26T17:59:44Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.35868"
  },
  {
    "id": "2610.35865",
    "title": "Center-of-Mass Interpretation of Evolution Strategies",
    "authors": [
      "Akshat Gupta"
    ],
    "abstract": "Evolution strategies (ES) update a model by sampling a population of perturbed copies, scoring each one, and moving in the reward-weighted direction of the perturbations. This update is usually presented as an estimate of a smoothed gradient. We present a geometrical interpretation of this update instead. Treat each perturbed model as a particle and its reward as the particle's mass. Before scoring, every particle has the same mass and the population balances at its centroid. Once rewards are assigned, it balances at its reward-weighted center of mass instead. We show that the mean-subtracted ES update is exactly this displacement, scaled by a scalar factor that depends on the mean reward, for any finite population. The physical reading needs nonnegative rewards, which can always be arranged by adding a constant to every reward without changing the update. In the limit of a large population or under antithetic sampling, the centroid sits on the model itself, so ES has an even simpler geometric interpretation: from its current location, the model moves towards the reward-weighted center of mass of its own population. The same picture explains what subtracting the mean reward does: it changes the point from which the displacement is measured, from the model to the sampled centroid. Our contribution is an intuitive, geometric way to visualize an ES update, exact for any finite population.",
    "published": "2026-10-26T17:59:33Z",
    "updated": "2026-10-26T17:59:33Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.35865"
  },
  {
    "id": "2610.35864",
    "title": "VibeVideoBench:Evaluating Multimodal Agents on Code-Driven Video Generation",
    "authors": [
      "Muxi Diao",
      "Wenbin Xu",
      "Lele Yang",
      "Xuyang Ma",
      "Yuzhe Chen",
      "Jiankang Chen",
      "Kaiyu Jiang",
      "Changyi Liu",
      "Haoyu Zhang",
      "Hongyi Fu",
      "Jianxiong Wang",
      "Tianke Zhang",
      "Haonan Fan",
      "Yingxin Li",
      "Bingyi Li",
      "Xu Wang",
      "Xuanyu Zheng",
      "Bin Wen",
      "Tingting Gao",
      "Han Li",
      "Wentao Zhang",
      "Weiran Xu",
      "Kongming Liang",
      "Zhanyu Ma"
    ],
    "abstract": "Diffusion video models produce striking clips, but they cannot reliably render an exact formula, a correct chart, a ruleconsistent game or narration synchronized to on-screen events. A different route is emerging: multimodal agents that write code to render every frame and synthesize every sound. We introduce VibeVideoBench, a benchmark for evaluating agents on code-driven video generation. Its 239 self-contained tasks in English and Chinese span 12 categories, from data stories and music-driven pieces to classroom lessons and paper explainers; each asks an agent, running in its native harness inside a sandbox, to deliver a finished MP4 with sound within one hour. Evaluation is hierarchical and evidence-based: program checks of the delivery spec, about 13k task-specific rubric checks traced to the requirements they enforce, and five quality dimensions anchored per task, judged by three VLM judge panels and validated with blind human preferences. Across nine frontier agent systems and 2,151 scored rollouts, the benchmark is far from solved: GPT-6 Astra and Claude Opus 5.5 lead clearly, yet even the best system fails a core requirement on about a quarter of tasks. Whether a video arrives at all matters as much as its quality, and three quarters of the lost videos are final renders started too late, run too slowly or never started. The judges agree with each other and with human preferences on system rankings, but only moderately on individual videos.",
    "published": "2026-10-26T17:59:32Z",
    "updated": "2026-10-26T17:59:32Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.35864"
  },
  {
    "id": "2610.35862",
    "title": "Learning Force-Reactive Humanoid Loco-Manipulation",
    "authors": [
      "Sihang Li",
      "Xiaofeng Guo",
      "Jinkun Cao",
      "Charlie Cheng",
      "Ruihan Yang",
      "Chen Feng",
      "Guanya Shi",
      "Haozhi Qi"
    ],
    "abstract": "Many everyday tasks require controlling contact force as well as motion. On a humanoid, this force must often be coordinated across both hands and the whole body, and cannot be specified by kinematic trajectories alone. Therefore, we present FLORE, a framework for learning force-reactive humanoid loco-manipulation. We collect robot-free demonstrations using two force-sensing UMI-style handheld grippers for hand motion and contact wrenches, and wearable trackers for body motion. A force-reactive diffusion policy takes vision, proprioception, and measured wrenches as input, then predicts actions and per-hand force commands. A hybrid compliance whole-body controller with force tracking executes these commands while maintaining balance: an integral of the force error measured by real force/torque (F/T) sensors lets each hand track force accurately along the commanded direction and remain compliant along the others. In simulation, the controller tracks per-hand force commands of varied magnitude and direction, with little loss in whole-body motion accuracy. Across three contact-rich tasks on the robot, the force-reactive policy succeeds in 80% of rollouts, compared with 26.7% for a position-only policy trained on the same demonstrations and executed by the same controller. For more details, please visit our website: https://louis-leee.github.io/FLoRe/.",
    "published": "2026-10-26T17:59:11Z",
    "updated": "2026-10-26T17:59:11Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.35862"
  },
  {
    "id": "2610.35857",
    "title": "Do vision models know that three is three?",
    "authors": [
      "Ankit Sonthalia",
      "Arnas Uselis",
      "Seong Joon Oh"
    ],
    "abstract": "Do vision models encode the transition $2{\\to}3$ the same way whether it appears in handwritten digits or in hand gestures, and do they \"understand\" that clean${\\to}$dirty is the same transformation regardless of whether it is applied to a kitchen or a carpet? The linear representation hypothesis (LRH) answers this for language models: concept changes correspond to directions in (language) embedding space. In vision, the same concept can manifest in visually unrelated \"regimes\" that rarely co-occur: images of digits and hands do not share much in common in pixel space. To understand whether vision models still encode the underlying abstract concepts, we study 46 vision encoders across architectures, training objectives, and scales, on 10 concept families including numerosity, age, object identity, and MIT-States attributes. Within each regime, we find statistically significant concept directions near-universally across our tested models. However, two distinct regimes do not always share the same concept direction. Several models learn multiple linear structures for the same concept transition, split across regimes. We call this phenomenon \"fragmented linearity\": strong local linearity coexisting with near-absent global linearity. Fragmentation is, however, not fixed: models with stronger local linearity progressively escape it (local-global linearity correlated with $τ\\in [0.38, 0.89]$ across all concepts), and where global linearity does emerge, concept directions can transfer as linear probes across regimes.",
    "published": "2026-10-26T17:58:17Z",
    "updated": "2026-10-26T17:58:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.35857"
  },
  {
    "id": "2610.35854",
    "title": "FL4N: Feed-forward Latent Model for 4D Novel View Synthesis",
    "authors": [
      "Eunbeen Hong",
      "Hyeonseo Yu",
      "Honggyu An",
      "Jooho Son",
      "Hyunah Ko",
      "Soowon Son",
      "Chaehyun Kim",
      "Jahyeok Koo",
      "Jisoo Kim",
      "Junhwa Hur",
      "Seungryong Kim"
    ],
    "abstract": "4D novel view synthesis (NVS) aims to render dynamic scenes across viewpoints and timestamps, which requires jointly inferring 3D structure and temporal dynamics. Existing monocular feed-forward methods often rely on explicit 4D Gaussian representations, which are prone to temporal inconsistency and severe rendering artifacts. We present FL4N, the first feed-forward latent 4D NVS model. Instead of relying on explicit 4D primitives, FL4N encodes a 4D scene prior into a unified latent representation across space and time. Our core insight is that learning temporal dynamics as residuals on top of a pretrained static latent prior enables effective 4D modeling with limited dynamic training data. To this end, we introduce a lightweight dynamic encoder that leverages static scene features to disentangle object motion from camera-induced parallax. Trained solely with an image synthesis objective, FL4N achieves state-of-the-art 4D NVS quality while rendering in real time. Its learned latent representation generalizes to real-world videos and disentangles viewpoint from time.",
    "published": "2026-10-26T17:58:03Z",
    "updated": "2026-10-26T17:58:03Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.35854"
  },
  {
    "id": "2610.35850",
    "title": "OSWAM: An Effective World Action Model with One-Step Action Generation",
    "authors": [
      "Guowen Zhang",
      "Liyi Chen",
      "Xu Hu",
      "Pengfei Wang",
      "Jingfan Chen",
      "Chenhang He",
      "Lei Zhang"
    ],
    "abstract": "Direct-policy World Action Models (WAM) have demonstrated the benefits of decoupling action generation from explicit future visual prediction for efficient inference in autonomous driving and embodied control. However, they still require tens of denoising steps to achieve competitive action quality, incurring substantial latency and hindering real-time deployment. Simply reducing the number of denoising steps will collapse the nonlinear multi-step denoising trajectory into coarse updates, substantially degrading action quality. To reduce the denoising steps while enabling real-time action generation, we present an effective world action model with one-step action generation, namely OSWAM, for autonomous driving and embodied control. We argue that it is the absence of structured action priors in random noise initialization that forces direct-policy WAMs to recover coherent action sequences through iterative denoising. Hence, we construct imagination tokens to initialize the diffusion process, providing physical priors and action-conditioned representations. We further introduce privileged information distillation with future conditioning to enhance future-aware action generation. As a result, OSWAM can efficiently and effectively generate high quality actions in just one diffusion step. Our experiments demonstrate that OSWAM achieves comparable or even better results in both autonomous driving and embodied control than direct-policy WAM and Joint-WAM that require tens of steps. It obtains approximately $3\\times$ speedup over direct-policy WAM baselines and supports real-time compiled inference with latency as low as 40ms on an NVIDIA RTX 5090 GPU. The project page is available at https://gwenzhang.github.io/OSWAM/",
    "published": "2026-10-26T17:57:09Z",
    "updated": "2026-10-26T17:57:09Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.35850"
  },
  {
    "id": "2610.35847",
    "title": "Patient-specific rubric-based evaluation of large language models across longitudinal cancer care",
    "authors": [
      "Wei-Wei Zhang",
      "Pengkai Wang",
      "Yan Li",
      "Zhijie Sang",
      "Guan-Qun Zhou",
      "Jun-Yan Li",
      "Shu-Han Zhou",
      "Pei-Wen Liu",
      "Ting-Xi Tang",
      "Min Tang",
      "Zhitian Hou",
      "Jianmin Wu",
      "Jian Guan",
      "i Lin",
      "Hongxia Yang",
      "Ying Sun"
    ],
    "abstract": "Large language models (LLMs) show promise in specialty medicine, yet existing evaluations largely focus on isolated clinical encounters rather than tracking how clinical responsibilities evolve across a longitudinal care pathway. Here we introduce NPC-RubricBench, a phase-aware benchmark for evaluating multistage clinical reasoning across the cancer care continuum, using nasopharyngeal carcinoma as a defined disease context. Curated from longitudinal records of 405 patients across two cancer centers, the benchmark comprises 941 patient-phase units across six sequential care phases and 17,688 patient-specific atomic criteria spanning five evaluation dimensions, with each assessment strictly restricted to decision-time clinical evidence. Evaluating 30 general-purpose and medical LLMs revealed that strong diagnostic performance does not carry over to downstream care. We evaluated 30 general-purpose and medical LLMs, showing that high diagnostic performance did not translate into improved downstream care. Instead, the dominant failure modes reversed across phases. Explicit decision errors dominated anatomical staging at 48.2%, whereas decision omissions dominated initial work-up and post-treatment follow-up at 33.4% and 30.4%, respectively. In the evaluated model set, medically adapted models showed higher omission rates than general-purpose models. Moreover, varying query granularity exposes a critical specification trade-off: broad open-ended requests degrade Decision Quality across all 30 models, while more detailed, checklist-like prompts raise Decision Quality but reduce Evidence Faithfulness and Safety Adherence. Furthermore, NPC-RubricBench demonstrates that static diagnostic benchmarks are insufficient to ensure consistent clinical reliability over time, highlighting the importance of phase-adaptive safeguards in multistage medical AI.",
    "published": "2026-10-26T17:56:26Z",
    "updated": "2026-10-26T17:56:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.35847"
  },
  {
    "id": "2610.35842",
    "title": "MedVTok: A General-Purpose Medical Visual Tokenizer",
    "authors": [
      "Chenglong Ma",
      "Yuanfeng Ji",
      "Junzhi Ning",
      "Jiyao Liu",
      "Yujie Wei",
      "Shaohao Rui",
      "Chaoyang Zhang",
      "Wenjie Li",
      "Wenhao Tang",
      "Cheng Tang",
      "Wei Li",
      "Shujian Gao",
      "Yujie Zhang",
      "Ying Chen",
      "Zilong Li",
      "Zongyuan Ge",
      "Diping Song",
      "Jin Ye",
      "Ming Hu",
      "Junjun He",
      "Hongming Shan"
    ],
    "abstract": "Multimodal medical AI requires a common visual interface for encoding heterogeneous imaging evidence for patient condition modeling. However, existing medical visual tokenizers are often tied to a specific dimension and imaging modality, forcing multimodal systems to rely on fragmented and poorly reusable representations. We introduce MedVTok, a general-purpose visual tokenizer that maps 2D images and 3D volumes from diverse imaging modalities into a unified token space. Building such a tokenizer poses two key challenges: preserving anatomical structure across dimensions and capturing clinical semantics across modalities. To this end, MedVTok introduces (i) slice differential regularization, which explicitly models inter-slice anatomical coherence missing in previous per-pixel/per-voxel supervision, and (ii) multi-expert representation alignment, which integrates knowledge from multiple medical expert encoders while retaining modality-specific complementary knowledge. Trained on 28M images and 70K volumes across 9 imaging modalities, MedVTok supports classification, retrieval, segmentation, synthesis, visual question answering, and medical report generation through a single tokenizer. Across 24 benchmarks, MedVTok achieves state-of-the-art performance, demonstrating a scalable token interface that unifies medical image dimension, modality, and task usage.",
    "published": "2026-10-26T17:54:40Z",
    "updated": "2026-10-26T17:54:40Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.35842"
  },
  {
    "id": "2610.35835",
    "title": "I-HITL: Inalienable Human-in-the-Loop",
    "authors": [
      "Samuel Breckenridge",
      "Dani Vilardell",
      "Wenhao Wang",
      "Fan Zhang",
      "Ari Juels"
    ],
    "abstract": "Human oversight is a pillar of AI safety. It is often exercised by a human in the loop (HITL) who approves critical actions taken by an AI agent. AI agents' increasing ability to bypass guardrails, though, raises the question of how to enforce HITL robustly. We introduce the concept of inalienable human-in-the-loop (I-HITL). An I-HITL protocol ensures that an agent can initiate an action only with explicit human approval, even when the human interacts with a system (e.g., a local agentic harness) compromised by the agent. A strong I-HITL protocol additionally ensures such approval even when an adversarial human attempts to delegate approvals to an agent. To motivate I-HITL, we report on experiments with a popular agentic wallet platform in which raising an agent's spending cap requires HITL approval via emailed one-time passcodes (OTPs). Given access to the user's email and a task blocked by the cap, we find that ten different frontier models will often autonomously raise the cap, harvesting OTPs to bypass a HITL guardrail and surfacing other vulnerabilities. We formally define I-HITL using the concept of communication topologies and prove necessary and sufficient conditions for its realization. We show that an I-HITL protocol requires a trusted entity - a trusted computing device (or equivalent) - and characterize which such devices can and cannot realize an I-HITL protocol. We present a prototype I-HITL system called Countersign that can plug into and strengthen existing HITL systems using off-the-shelf consumer mobile devices.",
    "published": "2026-10-26T17:52:14Z",
    "updated": "2026-10-26T17:52:14Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.35835"
  },
  {
    "id": "2610.35832",
    "title": "Profiling a Frontier Agent with EBench: From Direct Control to Harness with Policy",
    "authors": [
      "Yifei Yao",
      "Yude Zou",
      "Guanbo Jiao",
      "Xing Gao",
      "Ning Gao",
      "Yukai Wang",
      "Jiantong Chen",
      "Zihou Zhu",
      "Xinyu Li",
      "Ningyu Yan",
      "Shuai Wang",
      "Jianming Ma",
      "Haoyu Guo",
      "Weinan Zhang",
      "Chunhua Shen"
    ],
    "abstract": "Frontier multimodal large language models (MLLMs) can control robots without robot-specific training, but how their capabilities compare and interact with post-trained vision-language-action (VLA) and world action model (WAM) policies across manipulation demands remains to be thoroughly evaluated. In this report, we evaluate GPT-6-Astra on EBench as the core of an agent that controls a robot through an agent harness under the same visual and proprioceptive observation protocol as post-trained policies. We study two agent configurations: direct control, in which the agent generates waypoint commands directly, and harness with policy, in which it can also invoke a post-trained VLA or WAM policy for action execution. Under direct control, the agent achieves competitive overall performance relative to post-trained policies. It leads on short-horizon tasks and exhibits the least performance variation across generalization dimensions, whereas it underperforms post-trained policies on long-horizon tasks, tabletop manipulation, and high-precision contact-rich tasks. In the harness with policy, invoking a post-trained VLA or WAM combines the complementary strengths of both components, raising overall task success to the level of the strongest compared post-trained policies while substantially reducing token cost. However, performance remains below the per-task upper bound of the standalone components due to suboptimal policy invocation, fixed-instruction execution without subgoals, and grasp disruption when the agent resumes control. Overall, our study characterizes the capability boundary of a frontier MLLM agent and suggests directions for improving future agent harness design. Project page: https://internrobotics.github.io/EBench-Astra-Tech-Report/",
    "published": "2026-10-26T17:51:02Z",
    "updated": "2026-10-26T17:51:02Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.35832"
  },
  {
    "id": "2610.35829",
    "title": "Reva: Real-Time Vulnerability Detection through Contextual Probing of Large Language Models",
    "authors": [
      "Amine Lbath",
      "Massih-Reza Amini"
    ],
    "abstract": "A vulnerability costs more to fix the later it is discovered. As coding agents generate code faster than developers can review it, software needs a first line of defense screening each new function in real time. LLM agents have recently become capable of finding real-world vulnerabilities by working as a security expert would: they run analysis tools, explore the surrounding code, test hypotheses and weigh the evidence before forming their own judgement. This reasoning, however, spans many model calls, so that each verdict takes minutes of compute, far too long for real-time screening. Faster detectors, which fine-tune deep learning models or prompt an LLM for a direct verdict, are less accurate: they judge a function without the context an agent gathers, and an LLM's generated verdict is unreliable even when given some of it. We present REVA (REal-time Vulnerability Analysis), an AI vulnerability detector that brings the security context and code understanding components behind agentic detectors into a single forward pass of an LLM. For each new function, REVA gives the LLM a pre-computed threat model of its module, lightweight static analysis findings and call-graph information. REVA leverages a trained probe to read the LLM's internal representations of the new function in this context. On PrimeVul's held-out test set, REVA on GLM-5.3-Flash reaches 60.0% accuracy in about one second per function. This matches VulTriage (59.2%), the state-of-the-art agentic detector, run on the same LLM, while being over 250 times faster and less than a tenth as costly. On the same prompt, the probe is 14% to 17% more accurate than the LLM's own direct verdict. Across three open LLMs, REVA is at least as accurate as VulTriage, and about 10% more accurate on two of them. An LLM's internal representations thus encode much of what agentic detectors obtain through reasoning.",
    "published": "2026-10-26T17:50:09Z",
    "updated": "2026-10-26T17:50:09Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.35829"
  },
  {
    "id": "2610.34616",
    "title": "CSI-TextBench: A Dataset and Benchmark for Language-Grounded Ambient Sensing Perception",
    "authors": [
      "Guozhen Zhu",
      "Yuqian Hu",
      "Sakila S Jayaweera",
      "Wei-Hsiang Wang",
      "Beibei Wang",
      "K. J. Ray Liu"
    ],
    "abstract": "Indoor context deciphered by ambient sensing underpins many applications, from assisted living to smart buildings, yet remains weakly connected to the language-aligned paradigm of modern multimodal systems. Through billions of IoT devices, ambient WiFi Channel State Information (CSI) captures the indoor context of human activity and environmental dynamics passively via ubiquitous, always-on infrastructure. However, unlike vision or audio, CSI lacks naturally paired text like captions or transcripts, limiting its integration with language-driven AI systems. We present CSI-TextBench, a large-scale dataset and benchmark for aligning CSI data with natural language, unifying 3 sensing benchmarks into 285,790 samples across 7 tasks and pairing them with 2,291 hierarchically structured, label-derived descriptions via many-to-many assignment to construct 2.0 million CSI-text training tuples. Benchmarking 5 alignment methods from 4 paradigm families, we show that contrastive CSI-text alignment matches supervised classifiers without class labels, adapts to unseen classes with few samples, and responds to open-vocabulary natural-language prompts. A single unified model supports compositional scene understanding, answering joint queries over activity, proximity, and identity, achieving 86.9% top-1 accuracy on 140 composite scenes, outperforming task-specific classifier ensembles. CSI-TextBench enables ubiquitous ambient sensing as a language-indexed perception layer, enabling indoor contextual awareness in language-driven AI systems.",
    "published": "2026-10-25T22:27:32Z",
    "updated": "2026-10-25T22:27:32Z",
    "categories": [
      "cs.AI",
      "cs.ET"
    ],
    "url": "https://arxiv.org/abs/2610.34616"
  },
  {
    "id": "2610.34614",
    "title": "A Battery for AI Propensity Measurement: Rubrics, Synthetic Item Banks, and Annotations",
    "authors": [
      "Peter Romero",
      "Haotian Li",
      "Hugo Save",
      "Luning Sun",
      "Zachary R. Tidler",
      "Kazuya Horibe",
      "Joe Watson",
      "Daniel Romero-Alvarado",
      "Israel Mason-Williams",
      "Fernando Martínez-Plumed",
      "José Hernández-Orallo"
    ],
    "abstract": "We release a battery of 28 propensities for AI research, with expert-written rubrics, synthetic datasets, and annotated demand intervals, built with the method of Romero-Alvarado et al. (2026). We selected a wide collection of generic propensities that may influence the behavior of AI systems and humans. They are inspired by psychometric, psychological, and behavioral research, so that experimental results can be understood in the context of familiar constructs previously used also for human behavior research. The rubrics are useful for annotating existing benchmarks whose items may be relevant or not for one or more propensities. For easier profiling, however, the synthetic datasets are defined in such a way that they should be sensitive to one propensity only, allowing for a quick prototyping of propensity profiles using the battery of datasets. We also outline directions for future propensity research.",
    "published": "2026-10-25T22:22:11Z",
    "updated": "2026-10-25T22:22:11Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34614"
  },
  {
    "id": "2610.34610",
    "title": "Do Words Matter? What Text Contributes to Few and Full-Shot Vision-Language Anomaly Detection",
    "authors": [
      "Arda Baris Basaran",
      "Mesut Ceylan",
      "Elgar Fleisch",
      "Filipe Barata"
    ],
    "abstract": "Vision-language anomaly detectors describe normal and abnormal appearance with text, and their gains are commonly credited to the semantic content of these descriptions. This attribution is plausible in the zero-shot setting, but few- and full-shot detectors interpose a trained visual adapter, and in that setting it has not been isolated. Changing a description changes both its meaning and its geometry, so accuracy comparisons cannot separate the two. We ask what a fixed pair of text embeddings, or anchors, contributes to such a detector: semantic content, effective scale, or joint anchor geometry. For a single anchor pair, the answer is effective scale alone. The score reads the anchors only through their difference, and a trained adapter can rotate to follow any replacement direction, leaving that direction, and with it the linguistic content, unidentifiable. We prove that replacement anchors with the same difference-vector length permit exactly the same probability maps and attainable losses. Across seven medical datasets, three vision backbones, both supervision regimes, and three adapter families, scale-matched random and orthogonal anchors track correct prompts; breaking the scale match opens a gap that restoring it closes without text. The same pattern holds in MVFA and when MadCLIP's learned prompts are replaced by a text-free learned scale. When one adapter serves many categories, the answer expands to their joint arrangement. Rotating all category axes together changes nothing, as predicted. For the tested CLIP prompts, these axes are nearly collinear, and meaning-free rotations that spread them apart improve performance on both industrial benchmarks. Even under frozen zero-shot transfer, a random anchor frame transfers as well as the prompt frame: coordinate consistency, not meaning. What these detectors read from their prompts is scale and arrangement, not semantic content.",
    "published": "2026-10-25T22:17:23Z",
    "updated": "2026-10-25T22:17:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34610"
  },
  {
    "id": "2610.34609",
    "title": "Audio-R1: Audio Reasoning through Reinforcement Learning on Self-Supervised Tasks",
    "authors": [
      "Jihoon Jeong",
      "Mirco Ravanelli",
      "Zhepei Wang",
      "Cem Subakan"
    ],
    "abstract": "Reasoning is increasingly important for large audio-language models (LALMs), yet remains relatively underexplored compared with text-only and vision-language models. We introduce Audio-R1, a reinforcement learning (RL) post-training framework that revisits audio self-supervised learning as a source of verifiable rewards for improving audio understanding and reasoning task performance. Audio-R1 uses answers automatically determined during the construction of self-supervised tasks to verify model responses and compute rewards. Experiments across multiple LALMs and diverse audio benchmarks show consistent performance gains, while ablations demonstrate the benefits of each self-supervised task and additional gains from joint training. While both supervised fine-tuning and Audio-R1 improve self-supervised task accuracy, Audio-R1 further improves performance on downstream tasks distinct from the training tasks. These results highlight the potential of RL post-training with self-supervised audio tasks to improve downstream performance and reasoning-trace quality.",
    "published": "2026-10-25T22:17:04Z",
    "updated": "2026-10-25T22:17:04Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.34609"
  },
  {
    "id": "2610.34600",
    "title": "FlexiMIND: Combined Pretrained Vision Features and Local Structure for Training-Free Deformable Medical Image Registration",
    "authors": [
      "Mojtaba Safari",
      "Mingzhe Hu",
      "Shansong Wang",
      "Suyang Xi",
      "Joshua Lorenz",
      "Sean Pitroda",
      "Aytekin Oto",
      "Ralph R. Weichselbaum",
      "Xiaofeng Yang"
    ],
    "abstract": "Objective. Deformable image registration remains challenging because corresponding anatomy may exhibit different intensity relationships. Hand-crafted modality-robust descriptors such as Modality-Independent Neighborhood Descriptor with Self-Similarity Context (MIND-SSC) and features from pretrained vision encoders provide distinct representations for correspondence estimation, but how they should be combined remains unclear. We investigate whether tighter integration improves registration over a sequential, scale-separated design. Approach. We introduce FlexiMIND, a training-free and label-free two-stage framework in which frozen FlexiCT-2D encoder features establish contextual correspondence and MIND-SSC refines the deformation within ConvexAdam. Five alternative feature-coupling strategies were evaluated under a protocol across CT-CT (DIR-Lab 4DCT 4DCT, 10 cases), MR-MR (ACDC, 50 patients), and MR-CT (Learn2Reg Abdomen MR-CT, 8 pairs) registration. Performance was assessed using target registration error (TRE), Dice similarity coefficient (Dice), SDlogJ, and local folding. Main results. FlexiMIND achieved a TRE of 1.27 mm on DIR-Lab 4DCT, a DSC of 0.807 on ACDC, and an organ-averaged DSC of 0.825 on Abdomen MR-CT. Across 15 coupling-strategy dataset comparisons, only four outperformed the reference method, with a maximum absolute improvement of 0.0043 in Dice, whereas degradation reached 20.6 % in TRE and 37.9 % in Dice. Changes in registration accuracy were closely associated with changes in deformation-field regularity, and strategies that better preserved regularity generally remained closest to the reference performance. Landmark-level analysis showed that the pretrained encoder stage primarily reduced large correspondence errors rather than uniformly improving local precision. Code is available upon acceptance at https://github.com/mosaf/FlexiMIND.",
    "published": "2026-10-25T21:55:46Z",
    "updated": "2026-10-25T21:55:46Z",
    "categories": [
      "cs.CV",
      "physics.med-ph"
    ],
    "url": "https://arxiv.org/abs/2610.34600"
  },
  {
    "id": "2610.34599",
    "title": "An Agentic AI Workflow for Liver Lesion Segmentation and Structured Radiology Reporting",
    "authors": [
      "Fatma Ahmed Mansour",
      "Rahatara Ferdousi",
      "Manar Fathy Elshenawy"
    ],
    "abstract": "Despite advances in automated liver lesion segmentation, a gap remains between image-derived predictions and clinically interpretable radiology reports. Bridging this gap requires quantitative measurements that are both reproducible and traceable. We present an evidence-grounded agentic AI framework that connects liver and lesion segmentation with deterministic quantification and structured reporting. TotalSegmentator-based nnU-Net models delineate the liver, Couinaud segments, and lesions, while computational tools extract volumes, dimensions, counts, and anatomical locations. A large language model (LLM) organizes these measurements into a predefined reporting schema, with numerical consistency checks against source measurements. On 51 LiTS cases, the segmentation stage achieved a liver Dice score of 0.947, lesion sensitivity of 75.6%, and positive predictive value of 68.9%. Exploratory screening of 25,494 MERLIN reports identified 10,208 (40.0%) with liver-related abnormalities. By connecting quantitative imaging evidence with agentic report generation, this work takes a step toward human-centered medical AI that prioritizes traceability and clinical relevance.",
    "published": "2026-10-25T21:55:31Z",
    "updated": "2026-10-25T21:55:31Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34599"
  },
  {
    "id": "2610.34597",
    "title": "Finetuning Prompt-Based Image Editor for Geometry-Consistent Room Defurnishing",
    "authors": [
      "Prakhar Kulshreshtha",
      "Brian Pugh",
      "Zachary Nussdorfer",
      "Salma Jiddi"
    ],
    "abstract": "Erasing all furniture from a single room image to generate its empty counterpart is valuable for XR applications such as diminished reality and virtual staging. The challenge is twofold: inpainting the furniture regions with realistic content, and doing so without distorting the room's 3D geometry. Prompt-driven image editors, such as FLUX.2, handle realism impressively, but their structural faithfulness is inferior to explicit layout conditioned inpainting. To improve geometric consistency, we propose a training recipe for finetuning a LoRA on 2,500 furnished-empty room pairs. FLUX.2 with our LoRA adaptor significantly improves geometric consistency while retaining the high texture fidelity. This single-photo inpainter can be an effective building block for depth-aware and 3D-consistent XR pipelines.",
    "published": "2026-10-25T21:54:21Z",
    "updated": "2026-10-25T21:54:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34597"
  },
  {
    "id": "2610.34589",
    "title": "HARP-LoRA: Hierarchy-Conditioned Rank Projection for Low-Rank Adaptation in Scientific Table Understanding",
    "authors": [
      "Hossein Sholehrasa",
      "Mohammadhossein Amini",
      "Doina Caragea",
      "Remya Ampadi Ramachandran",
      "Dan Wu",
      "Zihang Shi",
      "Zelin Li",
      "Lindsey Hulbert",
      "Eder Martinez",
      "Xuan Xu",
      "Majid Jaberi-Douraki"
    ],
    "abstract": "Tabular data is widely used in scientific applications, where complex layouts, including multi-level headers, merged cells, captions, and footnotes, make information extraction difficult. This is particularly important in pharmacokinetics (PK), where values must be correctly associated with the drug, species, dose, administration route, unit, and experimental condition. Parameter-efficient fine-tuning methods such as Low-Rank Adaptation (LoRA) reduce adaptation cost but do not explicitly incorporate relationships between table values and surrounding headers. We introduce HARP-LoRA, a hierarchy-conditioned rank projection method for low-rank adaptation in scientific table understanding. HARP-LoRA extends projected LoRA by constructing token-specific intrinsic representations from the row- and column-header hierarchies of each data token. These representations condition the low-rank down-projection, incorporating hierarchical context while keeping the pretrained model and random projection tensors frozen. We evaluate HARP-LoRA on 950 manually annotated PK tables from 587 scientific articles and on WikiTableQuestions (WikiTQ) using Llama~3.2 3B, Llama~3.1 8B, and Gemma~3 27B. With Llama~3.1 8B, HARP-LoRA achieves a PK F1-score of 57.64\\% and WikiTQ accuracy of 53.15\\%, improving over LoRA by 1.42 and 6.56 points, respectively. With Gemma~3 27B, it achieves the best PK F1-score of 70.63\\% and WikiTQ accuracy of 56.87\\%. These results use only 172K, 197K, and 547K trainable parameters, far fewer than LoRA and TableLoRA. Overall, conditioning lightweight adapters on table-header hierarchies improves extraction from scientific tables and reasoning over flatter general-domain tables while maintaining parameter efficiency. Code is available at: https://github.com/hosseinsholehrasa/HARP-LoRA",
    "published": "2026-10-25T21:40:59Z",
    "updated": "2026-10-25T21:40:59Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34589"
  },
  {
    "id": "2610.34585",
    "title": "Large Language Models: A Plain-Language Overview for Engineers",
    "authors": [
      "Bahaeddin Türkoğlu"
    ],
    "abstract": "Large language models (LLMs) are neural networks trained on huge text collections to generate text by predicting what comes next. Engineers using ChatGPT and other generative artificial intelligence (AI) tools need a clear picture of what training changes and prompts add. The article starts with the Transformer, which connects words in context, and pre-training, where models learn to predict text. It then explains how fine-tuning adapts models to requests, with reinforcement learning from human feedback using human answer rankings. Next, retrieval-augmented generation (RAG) supplies documents, while chain-of-thought prompting encourages intermediate steps and agents use tools. FlashAttention lowers training and running costs by reducing data movement during attention; quantized low-rank adaptation (QLoRA) saves fine-tuning memory. Readers get a life cycle figure and tables comparing methods and their limits. A short checklist for judging LLM evaluation claims flags test material in training (data contamination) and model-based grading (LLM-as-a-judge). It also covers very long inputs (long context) and hallucination, meaning false or unsupported claims. Check factual accuracy separately from whether an answer sounds helpful.",
    "published": "2026-10-25T21:30:03Z",
    "updated": "2026-10-25T21:30:03Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34585"
  },
  {
    "id": "2610.34582",
    "title": "HobbyLM: A Sparse Mixture-of-Experts Model Family on a Hobby Budget",
    "authors": [
      "Harish Santhanalakshmi Ganesan",
      "Hariharan M. S.",
      "Prabhurajhan R"
    ],
    "abstract": "We describe HobbyLM, a family of small sparse Mixture-of-Experts (MoE) models trained from scratch with a few hundred to a few thousand dollars of rented GPU time. The core is a decoder-only transformer with fine-grained experts, sigmoid routing with auxiliary-loss-free load balancing, grouped-query attention with per-head QK-normalization, and aMuon/AdamW optimizer split. Each of these choices was selected with a single-variable ablation suite at 130M parameters. On this architecture we train a 500M-parameter model (169M active) on 40B FineWeb tokens and post-train it into a chat model, a masked-diffusion language model, a function-calling and computer-use agent, and a single \"omni\" checkpoint that reads text, images, video, sound and speech through frozen encoders and small projectors. We run these models on a laptop CPU with a from-scratch Rust inference engine. Two of the authors then adopted the architecture without architectural changes to build HobbyLM-1B (1.04B total, 305M active parameters), trained on a 100B-token curated mixture with a high-quality anneal. HobbyLM-1B reaches a 47.5 average on seven zero-shot benchmarks, and its builders also release an instruction-tuned model and an on-device macOS computer-use adapter. Finally, we describe HobbyLM-Image, a 333M-parameter flow-matching diffusion transformer that generates 1024x1024 images in a 32x-compressed latent space, together with a dependency-light CPU implementation of the full text-to-image pipeline. We report what worked, what did not, and where the small-scale ceilings lie. We also state for each component which author designed or built it.",
    "published": "2026-10-25T21:26:24Z",
    "updated": "2026-10-25T21:26:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34582"
  },
  {
    "id": "2610.34577",
    "title": "Rethinking Verification in Agent Harnesses",
    "authors": [
      "Zhengxin Zhang",
      "Erkang Zhu",
      "Yin Lin",
      "Claire Cardie",
      "Bolin Ding",
      "Jingren Zhou"
    ],
    "abstract": "Agent harnesses enable large language models to act through tools, observe the results, and iteratively work toward a task goal. Verification checks and revises agents' work to improve output quality. Yet there is limited guidance on how harnesses should organize this effort. We study verification as an axis of test-time scaling by examining when to intervene, who checks the work, and how checking leads to revision. Our framework spans four layers of the agent lifecycle: initial instructions, mid-turn reminders, completion gates, and independent review. We compare 17 designs across seven frontier coding models on Terminal-Bench (TB) and SWE-bench Verified (SWE), and introduce VisualBench for expert evaluation of visual and interactive artifacts. Initial instructions and execution-time reminders yield modest, model-dependent average gains on the coding benchmarks, without substantially increasing average output token use. Completion gates can yield larger gains but may substantially increase cost. Independent review by a critic offers a more favorable accuracy-cost tradeoff, improving average accuracy by 5.9-9.5 percentage points on TB and 3.9-6.6 on SWE at 1.13-1.25 and 1.00-1.04 times baseline cost, respectively. On VisualBench, independent review achieves net preferences of 13.2-23.8 points over the baseline across its four designs, exceeding the evaluated L0-L2 designs. Additional review rounds or independent critics further improve average TB accuracy by up to 3.5 percentage points. Together, these results provide empirical guidance for verification design in agent harnesses and support independent review as a practical axis of test-time scaling.",
    "published": "2026-10-25T21:17:26Z",
    "updated": "2026-10-25T21:17:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34577"
  },
  {
    "id": "2610.34569",
    "title": "Agentic AI Orchestration Framework for Spatial Intelligence: Supply Chain Deployment",
    "authors": [
      "Constantinos Papantoniou",
      "Brian Hilton"
    ],
    "abstract": "Industrial spatial decisions are assembled across systems that share neither a reference frame nor an owner, and analysts spend substantial effort reconciling those systems rather than reasoning about space. This paper presents ANASSA, a reference architecture integrating structured reasoning, multi-agent workflow orchestration, authoritative spatial grounding, and feedback-driven execution, and reports its instantiation in an operating supply-chain deployment. The architecture places typed data contracts at agent boundaries, validates spatial claims against a certified authoritative foundation, and enforces two blocking human-in-the-loop approvals inside a six-step cognitive loop. The deployment covers multi-hazard risk assessment on an ocean-and-inland freight lane, including cold-chain excursion detection over container telemetry. Across a three-month proof of concept (POC) with three implementation iterations, three deployment outcomes are reported: 25% improvement in data quality, 50% reduction in spatial workflow runtime, and 60% lower decision latency relative to the preceding manual workflow. Absolute deployment-scale quantities and baseline counts are confidential; reported percentages are observed relative changes. These are uncontrolled deployment observations, not controlled experiments. We therefore specify instrumentation and ablation protocols for mechanism-level evaluation.",
    "published": "2026-10-25T21:12:21Z",
    "updated": "2026-10-25T21:12:21Z",
    "categories": [
      "cs.AI",
      "cs.MA",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.34569"
  },
  {
    "id": "2610.33223",
    "title": "The Locality Trade-off in Masked Patch Self-Distillation",
    "authors": [
      "Xi Weng",
      "Zhaoyu Liu",
      "Lianyu Hu",
      "Jin Song Dong"
    ],
    "abstract": "Masked patch self-distillation is a key component of modern vision foundation models, including DINOv2 and DINOv3, yet its implications for local visual information remain unclear. We show that its semantic benefits can coexist with a scale-dependent locality cost. Using two annotation-free diagnostics, we distinguish recoverable local appearance from spatial correspondence. In smaller models, adding iBOT substantially weakens patch correspondence while largely preserving appearance decodability. In larger models, correspondence improves, but pixel and texture evidence becomes less linearly accessible in deep features. Thus, scaling changes the form of the locality cost rather than uniformly eliminating it. Our analysis of Gram anchoring further shows that preserving patch relations does not guarantee simultaneous improvements in both properties. These findings motivate evaluating and designing visual representations around the complementary demands of semantic abstraction, appearance preservation, and spatial correspondence. Our code is available at https://github.com/winci-ai/jea.",
    "published": "2026-10-23T19:20:11Z",
    "updated": "2026-10-23T19:20:11Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33223"
  },
  {
    "id": "2610.33215",
    "title": "Vision Token Pruning via Query-Vision Interaction Decomposition",
    "authors": [
      "Harshithanjani Athi",
      "Sravan Kumar Ankireddy",
      "Jianzhong Charlie Zhang",
      "Hyeji Kim"
    ],
    "abstract": "Large vision-language models (VLMs), which process both visual inputs and text queries, incur high inference costs due to the large number of visual tokens, making visual token pruning a natural approach for improving efficiency. Recent work has leveraged query information to guide token selection, often through heuristics derived from attention patterns or token dynamics. However, these approaches do not explicitly exploit the underlying structure of query-vision interactions. We address this gap by observing that the query-vision interaction matrix, naturally induced by the query and key projections already present in transformer attention, is effectively low-rank, with a small number of dominant latent interaction modes capturing query-relevant semantics. Motivated by this observation, we propose Query-Vision Decomposition (QViD), a novel training-free query-aware visual token pruning method that exploits this structure. Extensive experiments on both image and video understanding benchmarks show that QViD consistently improves performance under matched token budgets, with the largest gains appearing under aggressive compression regimes.",
    "published": "2026-10-23T19:06:29Z",
    "updated": "2026-10-23T19:06:29Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33215"
  },
  {
    "id": "2610.33205",
    "title": "Scaling Qualitative Analysis with Large Language Models: Development and Validation of the Smart Coder Framework for Human-LLM Collaborative Coding",
    "authors": [
      "Cheng Tang",
      "Kun Wang",
      "Yaxuan Yang",
      "Shiyu Wang",
      "Allan Cohen",
      "Rachael Eriksen Brown",
      "Chandra Hawley Orrill"
    ],
    "abstract": "Current uses of large language models (LLMs) for qualitative coding often rely on ad hoc prompting with limited guidance for reliability and human oversight. To address these limitations, we propose the Smart Coder Framework, a three-phase approach structuring human-LLM collaborative coding through Instruction, Prompt Strategy, and Reliability Check. We evaluated the framework using 72 middle-school mathematics teacher interview transcripts and a human-consensus benchmark. A factorial design compared instructed versus uninstructed prompts, few-shot versus few-shot plus chain-of-thought prompting, and single-pass versus self-consistency coding. Twelve transcripts were used for prompt development and calibration, and 60 for the formal evaluation. In the results, instruction consistently improved agreement. Chain-of-thought further improved agreement under adequate instruction, and self-consistency produced smaller, theme-dependent gains but helped identify unstable decisions for human review. Performance also varied by transcript characteristics. Overall, the framework systematically structures and monitors LLM-assisted qualitative coding while preserving human authority over coding decisions.",
    "published": "2026-10-23T18:52:09Z",
    "updated": "2026-10-23T18:52:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33205"
  },
  {
    "id": "2610.33203",
    "title": "Of Chains and Gains: What Reinforcement Learning changes on Reasoning-based Image Quality Assessment",
    "authors": [
      "Yixuan Li",
      "Yuxuan Jiang",
      "Hanwei Zhu",
      "Hancheng Zhu",
      "Fan Zhang",
      "Shiqi Wang",
      "David Bull"
    ],
    "abstract": "Reinforcement Learning with Verifiable Rewards (RLVR) has improved the performance of large Vision-Language Models (VLMs) on image quality assessment (IQA). Existing approaches often attribute these gains to improved reasoning before scoring, supported by increasingly plausible Chain-of-Thought (CoT). However, whether these gains exceed sampling effects and how they depend on explicit reasoning remain unclear. We rigorously investigate these questions through sampling-aware evaluation, controlled reasoning interventions, and shortcut experiments. We find that RL-trained models outperform base models under large-budget $\\operatorname{max}_g@k$ evaluation, while improvements beyond averaging are concentrated in-distribution. RLVR produces chains that raise base-model performance when transplanted and improves scoring with the chain held fixed. Yet scoring becomes less dependent on the chain during inference, more clearly at 7B than at 32B. Steering the probed quality direction in thinking tokens also has little effect on scoring. Finally, RL can improve scoring accuracy by exploiting textual cues correlated with mean opinion scores (MOSs), which could inflate benchmark performance. Together, these findings show that RLVR raises quality scoring and produces more useful chains, but that better scoring does not imply a stronger reliance on explicit reasoning, while score-based rewards can also encourage reliance on quality-irrelevant shortcuts. We hope this preliminary study can enlighten more and more concrete reasoning schemes in IQA.",
    "published": "2026-10-23T18:49:15Z",
    "updated": "2026-10-23T18:49:15Z",
    "categories": [
      "cs.CV",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.33203"
  },
  {
    "id": "2610.33201",
    "title": "Position, Role or Label? A Controlled Study of Instruction Conflicts in LLM Agents",
    "authors": [
      "Anish Laddha",
      "Nitesh Pradhan",
      "Gaurav Srivastava"
    ],
    "abstract": "LLM agents take instructions from the operator, repository configuration, user, tool results and saved memory, which often conflict. Instruction-hierarchy benchmarks ask whether the higher-ranked source wins, but a source sets position, role and label at once. First, we build WhoWins, 1,080 code-scored scenarios in five task types, each with up to five mutually exclusive instructions, and seven controlled experiments that vary only how instructions are delivered. Second, we study 14 open-weight models (0.6B to 122B, thinking off and on) over 1,887,356 scored replies, checking main findings on held-out scenarios. Inside one message the first of two conflicting lines wins 72.42 to 94.66%, and across messages it keeps 22.95 to 62.65%. A policy sent first in the system (or developer) message loses most conflicts with later lines in every Qwen model but wins most on gpt-oss when it acts. In tool and file-write tasks it wins less often than the same text sent first as a labelled user message, in every model-mode. Third, we test whether pairs forecast larger conflicts; forecasts improve in every model-mode once they know where the task line is. Finally, by our keyword patterns at most 2.92% of decided pair replies flag or hedge a conflict.",
    "published": "2026-10-23T18:48:27Z",
    "updated": "2026-10-23T18:48:27Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.33201"
  },
  {
    "id": "2610.33200",
    "title": "Isharah-Selfie: Continuous Sign Language Recognition Dataset for One-handed Signing",
    "authors": [
      "Ahmed Abul Hasanaath",
      "Murtadha Aljubran",
      "Sarah Alyami",
      "Muhammad Haris Khan",
      "Hamzah Luqman"
    ],
    "abstract": "Current sign language recognition and translation benchmarks are commonly collected in controlled settings using fixed or studio-style cameras, particularly limiting their ability to reflect how signers communicate in everyday mobile scenarios. As such, this gap becomes increasingly evident when considering the Arabic Sign Language (ArSL), which is a primary sign language used across Arab countries. In this work, we introduce Isharah-Selfie, a large-scale ArSL dataset collected entirely using front-facing smartphone cameras under unconstrained selfie conditions. The dataset comprises 8,997 video clips performed by 16 signers across 1,493 unique sentences, covering several domains such as healthcare, education, and transportation. Unlike conventional datasets dominated by fixed-camera, two-handed signing, Isharah-Selfie captures realistic mobile communication characterized by one-handed signing, close-range viewpoints, partial body visibility, camera motion, unconstrained environments, and heterogeneous device resolutions. Each video is annotated with both gloss sequences for continuous sign language recognition (CSLR) and Arabic sentence translations for sign language translation (SLT). Moreover, we define signer-independent and unseen-sentences evaluation protocols to assess generalization across unseen signers and novel sentence compositions. Extensive benchmarks using RGB-based and pose-based data show that current CSLR and SLT methods remain challenged by selfie-style signing conditions, particularly under unseen-sentence evaluation, where compositional generalization remains weak. By releasing Isharah-Selfie, we aim to support research toward robust, user-centered sign language technologies that operate reliably in realistic smartphone-based communication settings. The Isharah-Selfie dataset is available on https://isharah-selfie.github.io/.",
    "published": "2026-10-23T18:48:25Z",
    "updated": "2026-10-23T18:48:25Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33200"
  },
  {
    "id": "2610.33197",
    "title": "Cross-Platform Application Migration to HarmonyOS: An Agentic Pipeline with Artifact-Derived Verification",
    "authors": [
      "Ergun Biçici",
      "Mehmet Kaygusuz",
      "Fatih Turan Gündoğdu",
      "Emre Filiz",
      "Çağatay Kızıldağ",
      "Bünyamin Eymen Alagöz",
      "Emincan Özcan",
      "Sadi Çelik",
      "Tolunay Öztürk",
      "Ege Bulut",
      "Said Aldemir"
    ],
    "abstract": "The migration of applications written for a different platforms like Android or iOS to HarmonyOS NEXT requires a complete rewrite in ArkTS. Although LLMs automate the translation of source constructs into ArkTS, syntactic compilation is not enough and functional assurance is a critical open challenge in HarmonyOS NEXT migration. We present HMOS~Migrator, an agentic pipeline that reads an application's source code, generates an ArkTS project, and validates the result by replaying recorded interactions on a real device. We cast the scoring problem as quality estimation without a reference implementation; we score a migration using only the source application's recorded behaviour and the artifacts produced by the pipeline. We define seven weighted metrics, each constructed so that reduced measurement cannot artificially raise the score. Over twelve runs across six open-source applications, the pipeline's structural reproduction is high (completeness \\pct{83.3}--\\pct{100.0}), while on-device behaviour (\\pct{4.3}--\\pct{63.1}) and UI fidelity (\\pct{21.1}--\\pct{63.2}) remain the primary limits. Scores improve steadily over time: $+0.45$~points per day overall ($R^2=0.44$, $p=0.019$) and $+0.47$ over the model-free subset ($R^2=0.39$, $p=0.029$), with corresponding to fit angles of $+8.4^{\\circ}$ and $+11.7^{\\circ}$ respectively.",
    "published": "2026-10-23T18:46:17Z",
    "updated": "2026-10-23T18:46:17Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33197"
  },
  {
    "id": "2610.33194",
    "title": "Support-guided OOD Removal with Diffusion",
    "authors": [
      "Alireza Kheirandish",
      "Sara Fridovich-Keil"
    ],
    "abstract": "Many real-world signals are corrupted by localized, structured perturbations whose distribution is unknown: an intermittent background noise in a music recording, a watermark stamped on a photograph, a cast shadow. We study the task of recovering a clean signal $x$ from an observation $y$ containing such a localized out-of-distribution (OOD) corruption. We propose Support-guided OOD Removal with Diffusion, SORD, an iterative algorithm to recover $x$ using only two ingredients: a binary map of the corruption support and a single diffusion model pretrained on clean signals. SORD does not require any paired data or any statistical model of the corruption. We evaluate SORD on natural images and human faces with spatially localized corruptions including handwritten digits, other images, watermarks, and shadows, as well as audio recordings of different musical instruments with temporally localized corruptions including other instruments and human speech. SORD is competitive with, and often outperforms, posterior-sampling inpainting given the same diffusion prior and the same mask, source-separation baselines that require a separate diffusion model for each source, and, on several benchmarks, supervised networks trained on paired clean and corrupted signals. The code is released here: \\href{https://github.com/voilalab/SORD}{https://github.com/voilalab/SORD}.",
    "published": "2026-10-23T18:41:53Z",
    "updated": "2026-10-23T18:41:53Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.33194"
  },
  {
    "id": "2610.33191",
    "title": "Whale You Go Green? Immediate and Longitudinal Effects of Embodied Conversational AI Avatars on Sustainable Behavioral Tendencies and Pro-Environmental Attitudes",
    "authors": [
      "Rachel Poonsiriwong",
      "Pat Pataranutaporn"
    ],
    "abstract": "Embodied conversational AI can be persuasive, but can it motivate people to develop sustainable behavioral tendencies and increase pro-environmental attitudes? We conducted a randomized experiment (N = 576) comparing four embodied avatars--a beluga whale, Greta Thunberg, Emma Watson, and a generic human--with a text chatbot and no-intervention control. All embodied conditions increased immediate sustainable product selection relative to the control (beta = .401-.609, all q <= .0126) and chatbot (beta = .398-.604, all q <= .007), without differing significantly from one another. Only the Beluga condition increased immediate pro-environmental attitudes relative to the control after correction. Among 287 returners assessed two months later, following an intermediate assigned-condition session, Beluga also showed significantly higher pre-booster sustainable product choice compared to the control (beta = .657, q = .0176). Although it did not significantly outperform other embodied agents, these findings establish the immediate potential of nonhuman embodied avatar interfaces as a promising direction for memorable environmental interventions.",
    "published": "2026-10-23T18:33:07Z",
    "updated": "2026-10-23T18:33:07Z",
    "categories": [
      "cs.HC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33191"
  },
  {
    "id": "2610.33180",
    "title": "Propensities Please: Exposing Alignment-Faking LLMs using Synthetic Document Finetuning",
    "authors": [
      "Ardy Haroen",
      "Florian Lorkowski",
      "Samuel Nellessen",
      "Felix Hofstätter"
    ],
    "abstract": "Alignment evaluations aim to assess whether large language models would engage in dangerous misaligned behaviour. Misaligned and evaluation-aware models might engage in alignment faking, where they pursue a hidden goal, but conceal this behaviour when they suspect effective oversight such as during training, evaluation or audited deployment. Such a model might view any prompt-based intervention that aims to reveal latent propensities as part of the evaluation, calling into question the reliability of existing alignment evaluations. Current methods for detecting alignment faking rely on chain-of-thought monitorability, highly realistic environments that reduce evaluation awareness, or mechanistic interventions, all of which are expected to become less reliable for future model generations. We present a method for revealing latent misaligned propensities that does not rely on any of these. We use synthetic document finetuning to teach models that misaligned actions will go undetected whenever certain keywords appear in the prompt. We place alignment-faking model organisms in environments that are clearly identifiable as honeypots and measure how their behaviour changes after finetuning. We observe that finetuning consistently widens the gap in misaligned action rates between prompts with and without the cue, indicating that finetuning allows exposing latent propensities more reliably than purely prompt-based methods. We argue that behavioural methods for detecting alignment faking and related behaviours are critical going forward, as models become more capable and less interpretable. We find that SDF often damages the models' reasoning capabilities and introduce a mitigation based on on-policy distillation.",
    "published": "2026-10-23T18:23:49Z",
    "updated": "2026-10-23T18:23:49Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.33180"
  },
  {
    "id": "2610.33178",
    "title": "AOS-Bench: Can LLM Agents Manage Dynamic Workloads?",
    "authors": [
      "Erle Zhu",
      "Genrui Zhang",
      "Keyang Hu",
      "Mingyu Su",
      "Hongning Wang"
    ],
    "abstract": "Coding agents are moving from handling one request at a time to serving as persistent assistants to which users hand a stream of work: a build, a data-processing job and a bug fix may all be pending on the same machine at once. Such an agent must decide when to take on new tasks, how to delegate and overlap them, and how to stay within the machine's CPU and memory. Existing benchmarks cannot measure this, because they evaluate each task in isolation. We introduce \\benchname{}, which evaluates an agent system as a workload manager: verified tasks arrive over time and must be delivered under shared CPU and memory limits, and the same tasks run one at a time serve as a per-system reference. Across five model--harness pairs, isolated task success does not carry over evenly. On heavy workloads every system loses 13 to 23 points. On medium workloads, systems span 11 points in isolated success but 26 points in stream success, and two systems 0.6 points apart in isolation deliver 54\\% and 68\\% of the same tasks. Execution-policy interventions trace much of this gap to task intake: serial dispatch leaves 73\\% of heavy-workload tasks unclaimed. Yet more elaborate management does not necessarily help. A fixed concurrency of two comes within four points of the best agent-managed policy on both medium and heavy workloads, and under every policy median CPU use stays below 30\\% of the provisioned cores while tasks wait. These results identify workload management as a distinct capability for agents, and \\benchname{} as a way to measure it.",
    "published": "2026-10-23T18:20:48Z",
    "updated": "2026-10-23T18:20:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33178"
  },
  {
    "id": "2610.33169",
    "title": "World-in-Context: Interactive Video World Modeling with In-Context Conditioning",
    "authors": [
      "Harold Haodong Chen",
      "Rui Peng",
      "Rongjin Guo",
      "Lingteng Qiu",
      "Kejie Qiu",
      "Chao Xu",
      "Zilong Dong"
    ],
    "abstract": "Interactive video world models require coordinated control over viewing perspectives, character actions, and camera motion. Existing methods typically leave view modes implicit in text captions, conflate action with camera motion, and inject controls through fragmented architectural pathways that capture interdependencies only indirectly. In this work, we present World-in-Context, an interactive world modeling framework powered by In-Context Conditioning (ICC). Rather than relying on specialized conditioning pathways, World-in-Context unifies view, action, and camera controls into explicit tokens contextualized directly within a shared self-attention space. Our formulation reveals that (i) explicit view tokens disentangle conflicting dynamics and unlock emergent view switching from single-view data, while (ii) action and camera inputs play complementary roles in governing local responsiveness and global stability. To preserve temporal continuity across execution intervals, we further introduce Interaction-Transport RoPE (IT-RoPE), parameterizing temporal attention with accumulated control transitions. On WBench, World-in-Context-5B achieves navigation performance on par with 22B EchoWM ($81.5$ vs. $81.6$) and attains a $93.8\\%$ perspective-switching success rate, substantially outperforming existing 5B baselines ($18.8\\%$). Controlled analyses further demonstrate compounding advantages of World-in-Context under richer conditioning mixtures, favorable data efficiency, and natural applicability to causal rollouts.",
    "published": "2026-10-23T18:05:48Z",
    "updated": "2026-10-23T18:05:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33169"
  },
  {
    "id": "2610.31838",
    "title": "SAGE: Sense-Aligned Multimodal Grounding Evaluation with Gloss-Augmented Reasoning",
    "authors": [
      "Sunjae Kwon",
      "Suhaas Kiran DG",
      "Zonghai Yao",
      "Talha Chafekar",
      "Deepali Singh",
      "Hong Yu"
    ],
    "abstract": "This paper introduces Sense-Aligned Grounding Evaluation (SAGE), a unified 10-candidate image-selection benchmark that reformulates VWSD, VerSe, and WikiDiverse into a shared term-centric protocol covering noun-, verb-, and entity-centered grounding. SAGE includes confusable hard negatives and a context-swapped VerSe diagnostic to probe target-term grounding beyond direct caption--image compatibility. We further propose Gloss-Augmented Reasoning (GAR), a training-free framework combining definition grounding with constraint-guided semantic verification. Experiments show that strong VWSD performance does not transfer uniformly across grounding settings. With Gemma3-12B, definition augmentation improves all three subsets, while constraint-guided reasoning improves VWSD and yields particularly strong gains on VerSe, but is less effective on WikiDiverse. Combining the two signals achieves the best macro-average performance, improving Hits@1 from 65.90 to 71.22. These results show that SAGE supports both unified evaluation and fine-grained analysis of explicit semantic reasoning across grounding settings.",
    "published": "2026-10-22T19:23:18Z",
    "updated": "2026-10-22T19:23:18Z",
    "categories": [
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.31838"
  },
  {
    "id": "2610.31835",
    "title": "SAGE: A hybrid vision-language and geometry framework for work-zone pathway prediction under temporary traffic control",
    "authors": [
      "Jiaxi Liu",
      "Keshu Wu",
      "Weizhe Tang",
      "Bofeng Cao",
      "Sikai Chen",
      "Xiaopeng Li",
      "Steven T. Parker",
      "Bin Ran"
    ],
    "abstract": "Temporary traffic control redirects vehicles through work zones, requiring automated vehicles to connect an interpretation of the visible devices to a continuous passing path. Geometric predictors can provide several plausible paths, yet selecting the one consistent with the temporary control remains difficult. We propose SAGE (Semantic-to-Action Grounded Execution), a read-decide-execute-check framework that separates path construction, path preference, and control compliance within a shared candidate space. The central idea is to use a vision-language model's (VLM's) trajectory as a preference over intact geometric candidates. A role-decoupled generator constructs the candidates, and rank fusion combines each candidate's geometric score with its agreement with the VLM trajectory. Supervision structured around the Manual on Uniform Traffic Control Devices (MUTCD) trains SAGE-VLM to state the lane status and hazard side before its passage decision and trajectory. The predicted hazard side enters image-space predicates derived from MUTCD provisions, which support a final intervention bounded in score and displacement. On 2,306 real-world ROADWork validation episodes, the candidates include a path within 10 px of the human demonstration in 87% of episodes, yet selection regret accounts for 53% of the geometric ranker's error. SAGE reduces average and final displacement errors by 8.3% and 12.0% relative to the ranker, mostly in the far field, and hard-constraint violations by 37%. The trajectory opinion improves all four tested generator-selector combinations. SAGE is comparable to state-of-the-art VLM modules in accuracy, with a faster-responding VLM, and outperforms four other adapted driving VLMs in displacement error and safety measures. Project page: https://hhjj233.github.io/SAGE-page/.",
    "published": "2026-10-22T19:14:17Z",
    "updated": "2026-10-22T19:14:17Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.31835"
  },
  {
    "id": "2610.31834",
    "title": "WorldMirror: Agentic Real-to-Sim Generation of Interactive Worlds from In-the-Wild Robot Demonstrations",
    "authors": [
      "Tianling Xu",
      "Weijie Wan",
      "Honghao Su",
      "Kailun Su",
      "Junyuan Tang",
      "Huichi Zhou",
      "Haozheng Zhang",
      "Qi Xiong",
      "Ping Luo",
      "Wenbo Ding",
      "Tianxing Chen",
      "Yue Chen"
    ],
    "abstract": "Existing approaches for robot learning in simulation often require substantial manual effort to construct scenes and specify tasks, limiting training scalability and data diversity. Meanwhile, in-the-wild robot demonstrations naturally provide diverse and realistic observations of real-world interactions. Leveraging these demonstrations for simulation requires both high-fidelity visual reconstruction and physically consistent interactions. General-purpose agents offer flexible adaptation to diverse scenarios and strong reasoning about 3D spatial relationships, while specialized generative models provide high-fidelity reconstruction of scene appearance and geometry. We introduce WorldMirror, an agentic real-to-sim framework that constructs interactive digital twins from in-the-wild robot demonstrations. Our central idea is to formulate real-to-sim construction as the iterative refinement of an executable world program. A coding agent decomposes the observed scene, plans reconstruction steps, and orchestrates specialized image and 3D generation tools, refining the program through verification feedback. A camera-pose-anchored scene representation organizes the world into static visual context, support geometry, and editable interactive assets while preserving spatial relationships among the scene, objects, and robot. The agent uses this representation to diagnose and correct reconstruction errors, enabling physically consistent interaction and trajectory replay. Experiments on DROID demonstrate that WorldMirror can reconstruct visually faithful and geometrically consistent interactive worlds while preserving the physical validity of recorded robot trajectories.",
    "published": "2026-10-22T19:13:05Z",
    "updated": "2026-10-22T19:13:05Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.31834"
  },
  {
    "id": "2610.31829",
    "title": "SEVI: Safe Evidential Real-World Reinforcement Learning",
    "authors": [
      "Shaekh Mohammad Shithil",
      "Lantao Liu"
    ],
    "abstract": "Real-world reinforcement learning has enabled contact-rich manipulation tasks to be trained directly on physical robots, but unsafe interactions during online learning remain a key barrier to practical deployment. We propose Safe Evidential Real-World Reinforcement Learning (SEVI), a framework for reliability-aware safety intervention during real-world policy learning. SEVI introduces an Evidential Safety Critic that estimates both future constraint-violation risk and epistemic uncertainty in a single forward pass. During online learning, SEVI evaluates each task-policy action before execution; if the action is predicted to be unsafe or the prediction is insufficiently supported by evidence, SEVI overrides it with an offline-trained recovery policy that guides the robot toward a lower-risk region. We evaluate SEVI on two simulated manipulation tasks and a real-world USB insertion task under in-distribution and distribution-shifted conditions. Across task-learning and safety-critic baselines, SEVI achieves the strongest trajectory-level safety prediction, the highest final task success, and the lowest unsafe-event counts. SEVI also reduces unsafe events by 13.4 to 57.1 percent relative to recovery-based safe RL while preserving low-latency execution-time filtering. The project page is available at: https://sevi-safe.github.io/",
    "published": "2026-10-22T19:08:36Z",
    "updated": "2026-10-22T19:08:36Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.31829"
  },
  {
    "id": "2610.31821",
    "title": "What the Query Remembers: Query Abstraction Governs Lexical and Dense Retrieval of Classical Arabic Poetry",
    "authors": [
      "Omar Farouk Zouak",
      "Selma Mani",
      "Larbi Said Chikh",
      "Raid Abderrezak Ouahioune"
    ],
    "abstract": "How well a poetry archive can be searched depends on what the user still remembers, not only on what the model understands. We show this for Classical Arabic poetry, benchmarking nine dense encoders and BM25 over two corpora, three indexing modes and two evaluation protocols. Which retriever wins is governed by how much of a poem's wording the query still carries. On tip-of-the-tongue queries BM25 leads every dense encoder, including an 8B state-of-the-art model (0.746 vs. 0.717 Recall@5); on abstract queries it falls to eighth out of ten (0.392 vs. 0.748). Editing the wording of the same queries shows that this ranking largely reflects query composition: adding one remembered half-verse raises BM25 by 38 points, rewriting the quoted words by hand leaves BM25 level with the 8B encoder, and BM25's sensitivity to remembered wording is significantly steeper than that of the strongest dense encoder. The same axis controls explanation augmentation, whose effect swings from +37 to -39 points. The mechanism splits by system type: lexical containment predicts BM25's behaviour, while embedding proximity predicts dense encoders. Finally, the field's two standard protocols, known-item retrieval and thematic relevance, dissociate on the same systems, a result reproduced by two blind human annotators and by two open-weights judges, one of them under a rubric with no literal-match criterion. A benchmark that reports one protocol, or one query register, can give a materially wrong picture. Code and data are available at https://github.com/Ellzo/what-the-query-remembers.",
    "published": "2026-10-22T18:59:15Z",
    "updated": "2026-10-22T18:59:15Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2610.31821"
  },
  {
    "id": "2610.31812",
    "title": "PrefO2O: Zero-Shot Preference-Based Reinforcement Learning via Offline-to-Online Latent Preference Transfer",
    "authors": [
      "Ruiqi Wang",
      "Dezhong Zhao",
      "Xuesu Xiao",
      "Erdem Biyik",
      "Byung-Cheol Min",
      "Guohua Chen"
    ],
    "abstract": "Preference-based reinforcement learning (PbRL) has emerged as a promising paradigm for learning robot behaviors aligned with human intent. However, its scalability is fundamentally limited by the need to collect expensive human preference labels for every new task. In this work, we present PrefO2O, an offline-to-online latent preference transfer framework that enables zero-shot PbRL on unseen target tasks without requiring any human feedback. The core idea is to learn a task-invariant latent preference space from a small amount of offline preference data on source tasks, where transferable preference structures are disentangled from task-specific variations. This learned manifold allows PrefO2O to transfer preference structures and reward priors to new tasks under distribution shift, while confidence-weighted optimal transport alignment generates reliable pseudo-preference supervision for online reward adaptation. Extensive experiments on robotic manipulation and locomotion benchmarks demonstrate that PrefO2O substantially outperforms existing preference-transfer baselines and matches or exceeds PbRL methods trained with real human feedback, while generalizing across multi-to-one and one-to-one transfer settings as well as across different robot embodiments.",
    "published": "2026-10-22T18:49:10Z",
    "updated": "2026-10-22T18:49:10Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.31812"
  },
  {
    "id": "2610.31810",
    "title": "PaperFormalizer: Author-in-the-Loop Autoformalization of Research Papers in Lean",
    "authors": [
      "Jiyuan Tan",
      "Vasilis Syrgkanis",
      "Jose Blanchet"
    ],
    "abstract": "Even a carefully proofread paper can leave small gaps in its proofs or its stated assumptions. We introduce PaperFormalizer, a Lean-based agentic pipeline that helps authors find and close such gaps in their own papers and turn each paper into a Lean-verified version. Starting from the LaTeX source, PaperFormalizer transcribes the paper into a dependency graph of statements, audits each statement in natural language for faithfulness, ambiguity and correctness, and then formalizes and proves the statements in Lean against Mathlib, optional domain libraries and the author's personal toolkit. Only the author knows what a statement is meant to say and how a formalization gap in a result is best fixed. The pipeline therefore stops and asks the author whenever a statement admits more than one reading, presents every repair, in natural language and TeX symbols, as a proposal that the author can accept, decline or redirect, and leaves to the author every decision that could potentially change what the paper claims. The output is an annotated and revised version of the paper, a report of the changes, and Lean code in which each declaration is linked to the statement it formalizes. The author's toolkit grows as more papers are formalized, and authors can share their verified papers so that researchers who build on them can reuse their Lean code. By making verified papers practical to produce, PaperFormalizer aims to make research that rests on mathematical proofs more robust. PaperFormalizer runs inside a coding agent (Claude Code or Codex) and is available at https://github.com/Jiyuan-Tan/PaperFormalizer. Papers with Lean code shared by users are available at https://paperformalizer.org.",
    "published": "2026-10-22T18:46:53Z",
    "updated": "2026-10-22T18:46:53Z",
    "categories": [
      "cs.AI",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2610.31810"
  },
  {
    "id": "2610.31808",
    "title": "Patronizing and Condescending Language Detection in English and Mandarin",
    "authors": [
      "Xinyi Vicky Xiang",
      "Catherine Qingyun Wang",
      "Paula Cortés Lemos"
    ],
    "abstract": "Patronizing and condescending language (PCL) is a form of harmful language that belittles and assumes pity for vulnerable groups, reinforcing negative societal stereotypes. However, unlike overt hate speech, it is often difficult to detect, even for human judges. This paper proposes a system for the automated detection of PCL. Our first approach uses static word embeddings and a convolutional neural network for classification, while our second approach uses pre-trained BERT embeddings fine-tuned for the PCL task. Our second approach was considerably more successful, and achieved an F1 score of 0.528 over the development set.",
    "published": "2026-10-22T18:44:00Z",
    "updated": "2026-10-22T18:44:00Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.31808"
  },
  {
    "id": "2610.31803",
    "title": "StackGen3D: Stable 3D Block Stack Generation from Multiview Silhouettes",
    "authors": [
      "Xiaopeng Zhang",
      "Luzhe Sun",
      "Yiqing Xu",
      "Matthew R. Walter"
    ],
    "abstract": "Generating physically stable 3D structures from visual specifications requires resolving geometric ambiguity while accounting for physical interactions among objects. We present StackGen3D, a framework for generating stable block assemblies conditioned on a given block inventory and three orthographic silhouettes. Our approach consists of two stages. First, we develop a physics-informed graph neural network (PI-GNN) that models support relations between blocks and serves as a fast stability predictor for curating a diverse dataset of stable structures. Second, we train a conditional flow-matching model on this dataset to capture the multimodal distribution of block configurations consistent with the target silhouettes. At inference time, lightweight geometric selection and refinement reduce inter-block penetration without physics simulation. Preliminary experiments show that the PI-GNN generalizes from simple stacks to complex structures substantially better than a parameter-matched multilayer perceptron. For structure generation, Best-of-10 selection improves physical stability from 45.3% to 72.4% while achieving a silhouette IoU of 0.970. These results highlight the potential of combining relational physical reasoning, scalable data curation, and conditional generative modeling for creative 3D assembly. Project website: [https://ripl.github.io/StackGen3D-web/](https://ripl.github.io/StackGen3D-web/)",
    "published": "2026-10-22T18:41:21Z",
    "updated": "2026-10-22T18:41:21Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.31803"
  },
  {
    "id": "2610.31797",
    "title": "PnP*: A certifiable solver for Perspective-n-Point",
    "authors": [
      "Bang-Shien Chen",
      "Caitrin E. Eaton",
      "David M. Rosen"
    ],
    "abstract": "Estimating a camera pose from 3D-2D correspondences - Perspective-n-Point - is one of the most fundamental problems in computer vision. Existing methods either solve a minimal problem or replace the objective with an easier one. Surprisingly, no scalable certifiable solver for the actual Maximum Likelihood Estimation (MLE) exists. We propose PnP*, the first practical solver that guarantees efficient computation and returns a certifiable globally optimal solution. We prove that the underlying convex relaxation is exact under moderate noise, which to our knowledge is the first stability guarantee for any relaxation for the MLE of PnP. Furthermore, we reduce the relaxation by exploiting chordal sparsity pattern and quotient ring reduction such that the relaxation is tractable and scalable. The stability and scalability results are verified numerically, as PnP* returns a provably correct camera pose at over 10 Hz.",
    "published": "2026-10-22T18:38:48Z",
    "updated": "2026-10-22T18:38:48Z",
    "categories": [
      "cs.CV",
      "cs.RO",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.31797"
  },
  {
    "id": "2610.31791",
    "title": "PaperScorer: How Predictable Is Paper Acceptance?",
    "authors": [
      "Sachin Konan",
      "Jonathan Liu",
      "Zhuang Liu"
    ],
    "abstract": "Automated research is largely evaluated by benchmark performance, but the value of research rarely reduces to a single score. Humans judge a work's holistic contribution through peer review, which is hard to model because it is noisy and depends on many factors. However, what if, given only the paper, we could predict its peer-review decision directly? We introduce PaperScorer, a family of models that predict a paper's accept or reject decision from its extracted text or page screenshots, training only on the decision after removing author identity and formatting shortcuts. Vision models are the most predictive (68% accuracy on ICLR papers and 77% on ML papers from arXiv), beating text-only and frontier reasoning models. Unlike plain text, page images retain figures, layout, and presentation. This signal is robust, surviving smaller models and even compressing the whole paper into a single image. But accurate predictions are not evenly spread. PaperScorer is strongest on the lowest and highest rated papers, while papers rated in the middle stay unpredictable for our models and frontier systems alike. Additionally, its confidence is calibrated, so its most confident predictions are also its most accurate. Overall, PaperScorer shows how much of the decision a paper carries on its own, marking a first step toward AI-driven research evaluation.",
    "published": "2026-10-22T18:30:53Z",
    "updated": "2026-10-22T18:30:53Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.31791"
  },
  {
    "id": "2610.31789",
    "title": "Phronix: The Capability-Centric Learning Paradigm for Agents",
    "authors": [
      "Hariharan Devarajan",
      "Neeraj Rajesh",
      "Aniruddha Marathe",
      "Nikoli Dryden",
      "Kin Ng",
      "Michela Taufer"
    ],
    "abstract": "Scientific computing increasingly relies on large language model-based agents for performance engineering tasks such as instrumentation, analysis, and workflow porting. However, agent effectiveness depends heavily on the surrounding harness, which typically relies on manually written skills and curated memory. This limits autonomous learning, forcing agents to repeatedly rediscover solutions rather than retain and reuse knowledge from prior executions. We introduce Phronix, a capability-centric learning paradigm that enables agentic harnesses to acquire, validate, and refine reusable capabilities from their own executions. Phronix operates through a predictor-validator-corrector loop: MCP tools and associated skills propose solutions, tool executions validate them, and observed outcomes refine the stored capabilities. It distills every observed interaction into a capability store and researches a failing task rather than abandoning it. First, such learned capabilities solve a recurring task on the first attempt in 93-95% of cases across every model, significantly reducing solution non-determinism and improving reliability. Second, Phronix turns an agent's own execution into 7.6-30.8 durable capabilities per task without user instruction, and creation falls below two once the needed capability exists. Third, warm-start runs consume only 0.38-0.40 million tokens per task, which is three to four times less than a single baseline attempt, while a cold-start costs no more than the baseline. On the 1000 Genome Pegasus workflow, instrumenting a production application for I/O performance analysis, Phronix passes all 11 correctness checks against six for the baseline harness, and also lifts the task solving rates of two cheaper models from 29% and 27% of SWE-bench tasks solved to 91% and 87%, respectively, matching the performance of the most expensive evaluated model.",
    "published": "2026-10-22T18:29:52Z",
    "updated": "2026-10-22T18:29:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.31789"
  },
  {
    "id": "2610.30582",
    "title": "Model Organisms of Collusion: Corrective Transfer in Untrusted Monitors",
    "authors": [
      "Juan-Pablo Rivera",
      "Ari Spiesberger",
      "Juan J Vazquez",
      "Arun Jose",
      "Axel Ahlqvist",
      "Adeline Kassler",
      "Meru Gopalan",
      "Sandy Tanwisuth",
      "John Hughes"
    ],
    "abstract": "AI control protocols aim to get useful work from models that may be misaligned by monitoring their behaviour. One approach uses a second copy of the same model as the monitor. This avoids relying on a weaker reviewer the model could outsmart, but risks collusion: the model, now monitoring itself, may cover up its own misbehaviour. One remedy is to fine-tune the monitor on whatever examples of misbehaviour the control team has caught. We ask whether this training also removes collusion that the control team has not yet found. We fine-tune Llama-3.3-70B and Qwen2.5-72B to install five policy-monitor behaviour pairs, correct the monitor on 300 honest reviews of one caught collusion, and measure collusion on the other four in unseen prompt formats. Averaged over the three seeds of each family, correction reduces held-out collusion from 91% to 14-20% under three of the four methods we compare (individual seeds 10-32%), while a control fine-tuned on the same number of unrelated examples leaves 56-93%. Family-average accuracy on control items changes by at most five points and capability is preserved, apart from a drop in mathematical accuracy on one Llama seed. Under the tested training configuration, methods with similar caught-task accuracy differ in held-out transfer, from 58% to 83% average reduction, so the caught behaviour alone does not reveal how far a correction reaches. Catching one collusion lets the control team reduce, but not remove, collusion it has not caught, by retraining the monitor alone.",
    "published": "2026-10-22T01:22:48Z",
    "updated": "2026-10-22T01:22:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30582"
  },
  {
    "id": "2610.30576",
    "title": "Bridging the Closed-World Gap: Interpretable Anomaly Detection via a Hybrid TSK-FCM Ensemble on the BETH Dataset",
    "authors": [
      "Lohith Srikanth Pentapalli",
      "Josette Riep",
      "Justin Ouwerkerk",
      "Kelly Cohen"
    ],
    "abstract": "A fundamental paradox plagues the deployment of Machine Learning in cybersecurity: supervised models generalize poorly to novel, Out-of-Distribution (OoD) attacks, whereas unsupervised models often suffer from poor separability, leading to unmanageable false-alarm rates. This challenge is exemplified by the BETH dataset, a kernel-level benchmark in which the training data consists solely of benign and suspicious insider behaviors, whereas the test set consists almost entirely of novel botnet activation attacks. To bridge this detection gap, we propose a Hybrid Fuzzy Ensemble that synergizes the precision of supervised learning with the adaptability of unsupervised clustering. Our architecture integrates a gradient-optimized Takagi-Sugeno-Kang (TSK) fuzzy classifier to act as an expert on known insider threats, with a parallel Fuzzy C-Means (FCM) module to detect geometric anomalies. A critical finding of our research is that traditional fuzzy membership scores degrade in high-dimensional feature spaces due to the curse of dimensionality. We overcome this by introducing a robust Min Distance metric that exploits the raw geometric isolation of botnet activation attacks. This approach yields a state-of-the-art AUROC of 0.9951 on the BETH test set, outperforming the original Isolation Forest baseline by 17.1%. By combining near-perfect OoD detection with the intrinsic interpretability of fuzzy logic, our framework offers a viable path toward robust, transparent, and autonomous network defense.",
    "published": "2026-10-22T01:11:25Z",
    "updated": "2026-10-22T01:11:25Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.30576"
  },
  {
    "id": "2610.30573",
    "title": "Diagnosing Personalization Failures in Mobile GUI Agents",
    "authors": [
      "Zhixin Lin",
      "Dongliang Xu",
      "Jungang Li",
      "Shidong Pan",
      "Jun Feng",
      "Yanbin Sun",
      "Jing Li",
      "Liang Liu",
      "Yue Yao"
    ],
    "abstract": "Unlike conventional GUI agents, personalized GUI agents require user preferences to guide sequential execution over changing GUI states. This raises two challenges: determining HOW each preference should alter execution strategy and WHEN it should take effect along the interaction trajectory. Existing benchmarks primarily evaluate overall task success, offering limited insight into these questions. We introduce PrefDiag-Bench with two components: (1) a categorization of preferences into five types, characterizing HOW they affect execution; and (2) a stage-wise diagnostic framework with 1,664 probes, tracing WHEN preferences should take effect and where failures occur. We evaluate eleven GUI agent systems, including end-to-end agents and agentic workflows, under two forms of user context: explicit user profiles and behavioral memory logs. Although existing agents achieve relatively high completion rates on non-personalized tasks, performance is substantially lower on preference-personalized tasks. Even the best-performing model, Seed-2.0-Pro, achieves only 47.17% on Process preferences under explicit user profiles. Agents struggle particularly with Ranking and Process preferences. Further analysis reveals two key capability bottlenecks: selecting relevant evidence from user history and recognizing when preferences should take effect during execution. Controlled interventions that explicitly provide relevant evidence improve end-to-end task success by up to 7.06%. PrefDiag-Bench offers a more systematic evaluation of GUI agents' personalization capabilities beyond overall task success. Code and data are available at https://github.com/Zhixin-L/PrefDiag-Bench.",
    "published": "2026-10-22T01:04:24Z",
    "updated": "2026-10-22T01:04:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30573"
  },
  {
    "id": "2610.30568",
    "title": "Beyond Better Ideas: How Human-AI Collaboration Shapes Scientific Ideas and Human Perceptions",
    "authors": [
      "Qian Chen",
      "Saatvik Pradhan",
      "Janice Ahn",
      "Berk Atil",
      "Angkai Li",
      "Shijie Lu",
      "Nobin Sarwar",
      "Michael Ulis",
      "Ruyuan Wan",
      "Wenpeng Yin"
    ],
    "abstract": "As AI increasingly becomes a collaborator in scientific research, its impact may extend beyond improving ideas to reshaping how they are evaluated, attributed, and perceived by humans. Yet existing research has largely examined these dimensions in isolation. We present a unified empirical study of Human-AI scientific ideation, investigating two complementary perspectives: i) how AI collaboration shapes scientific ideas and their evaluation, and ii) how firsthand collaboration reshapes human perceptions of AI. Through a shared experimental setting involving Human-AI and Human-Human research teams, human and LLM evaluators, collaboration-provenance analysis, and participant surveys, we uncover several counterintuitive findings. First, AI collaboration shows no significant advantage in human-evaluated idea quality, while iterative revision consistently improves quality. Second, AI judges can approximate human scores yet disagree on idea rankings; notably, an AI judge favors AI-assisted proposals without a corresponding advantage in human evaluations. Third, collaboration provenance remains only partially detectable, revealing substantial overlap between Human-AI and Human-Human scientific outputs. Finally, firsthand AI collaboration is associated with greater perceived usefulness but smaller efficiency gains than expected, suggesting a nuanced recalibration of human expectations. Overall, our findings challenge the notion that AI's value in scientific ideation lies primarily in producing better ideas, revealing instead its broader influence on scientific creation, evaluation, attribution, and human perceptions.",
    "published": "2026-10-22T00:53:21Z",
    "updated": "2026-10-22T00:53:21Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30568"
  },
  {
    "id": "2610.30562",
    "title": "Lifetime-valid decisions by continually evolving AI analysts",
    "authors": [
      "Xiaojing Sun",
      "Yuhan Zeng",
      "Xiao Wang"
    ],
    "abstract": "AI agents increasingly act as analysts whose decision can often be cast as hypothesis tests. Classical tests control the Type I error rate, the probability of rejecting a true null hypothesis, for fixed procedures. However, AI analysts introduce internal randomness and can evolve continuously over time. As AI analysts evolve, the risk of approving versions with Type I error rates above the target can accumulate, and adaptive use of evaluation feedback can lead to overfitting. We introduce continual validation, which evaluates each proposed AI analyst version before deployment using simulated data under the null hypothesis, with scenarios that can be randomized and expanded over time. We prove that, regardless of how updates are chosen or how many are proposed, the lifetime probability of ever deploying a version whose Type I error rate exceeds the allowed level remains bounded. This guarantees that every subsequent decision controls the Type I error rate at the target level across these scenarios. At the same time, updates with sufficiently low Type I error rates pass validation with high probability, allowing the analyst to continuously improve its performance without sacrificing rigor. In two examples involving evolving AI analysts for bioequivalence studies and product A/B tests, Type I error rates reached 0.098 and 0.183 without continual validation, compared with at most 0.045 and 0.044 with it, while retaining 82% and 96% of the power from optimally selected valid updates.",
    "published": "2026-10-22T00:34:06Z",
    "updated": "2026-10-22T00:34:06Z",
    "categories": [
      "stat.ME",
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.30562"
  },
  {
    "id": "2610.31709",
    "title": "Mining the Design Space of Multi-Agent Workflows",
    "authors": [
      "Xavier Cadet",
      "Junyan Cheng",
      "Peter Chin",
      "Kyle Richardson"
    ],
    "abstract": "Designing large language model (LLM) multi-agent systems (MAS) still relies on trial and error and informal \"folk wisdom.\" Manual studies test only a few communication structures or topologies (e.g., sequential, parallel, shared-memory, or debate), while automated optimizers discard search trajectories after selecting a task-specific workflow. We present a two-phase pipeline for mining reproducible design principles from workflow code and execution traces. We repurpose AFlow's MCTS optimizer across six composable operators and 26 deterministically verified Enigmata tasks, retaining all intermediate rounds to build a corpus of 28,568 executable workflows. A sandboxed AutoResearch loop then mines orchestration code and prompt templates under an $L_0$-penalized validation objective and tests candidate principles on held-out searches. Across 300 feature-mining trials, we identify effects that persist on held-out searches across three levels of workflow design: workflows beginning with independent solvers and one-shot aggregation (Star-first) perform worse ($Δ= -0.045$); persistent shared documents (SharedMemory) outperform debate ($Δ= +0.135$); and prompt specificity and placeholder-based context routing yield gains comparable to communication-structure selection ($Δ= +0.118$). More broadly, our pipeline and results show the feasibility of turning discarded search trajectories into a statistical testbed for discovering and validating multi-agent workflow design principles.",
    "published": "2026-10-22T00:31:39Z",
    "updated": "2026-10-22T00:31:39Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.31709"
  },
  {
    "id": "2610.30557",
    "title": "Governed Self-Evolution for Autonomous Investing: A Multi-Agent LLM System with an Invariant Core",
    "authors": [
      "Yebo Feng",
      "Jingyang Dai",
      "Liangrui Pan",
      "Nelson Lau",
      "Jiahua Xu",
      "Yang Liu"
    ],
    "abstract": "LLM agents that act on live Web data must combine heterogeneous evidence, remember what they have done and improve from outcomes without weakening their own safeguards. We study this problem in autonomous investing, where every action is irreversible and based on untrusted Web content. We present Steward, a multi-agent LLM system that draws the boundary of self-evolution in its type system. First, nine role-specialised agents decide jointly: four analysts read news feeds, SEC filings, macroeconomic series and market data and emit typed reports, from which a Portfolio Manager sets target positions that a protected Risk Manager audits. Second, a seven-layer shared memory, assembled by code from the system's own record, gives each decision its position context, the market narrative, calibration and the agent's past decisions. Third, the system improves itself by review: code grades every trade and forecast nightly and writes the grades into memory, and each quarter a reflector proposes prompt learnings that a deterministic gate applies reversibly and replay of recorded inputs verifies. All three operate around an invariant core of order arithmetic, risk rules and discipline-agent prompts that no self-edit can reach. In a five-month live deployment (102 trading days, 1,632 LLM calls), the system contained a 24.6% sector drawdown to a 0.3% loss; in replay of its recorded inputs, a single model given the same raw data traded more and lost 1.35 points against the market over five days where the joint design showed no significant loss, and no injected instruction was followed; and a 2015-2026 backtest shows the core alone lowering the maximum drawdown under all 50 random entry policies. The reflector traced the dominant failure to its root cause, and the gate applied a learning that the agent adopted on trigger evenings and on no control evening. Code: https://github.com/yebof/quant-agent",
    "published": "2026-10-22T00:22:47Z",
    "updated": "2026-10-22T00:22:47Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA",
      "q-fin.PM"
    ],
    "url": "https://arxiv.org/abs/2610.30557"
  },
  {
    "id": "2610.30548",
    "title": "Atlas: Making Sense of Long Horizon Agent Trajectories",
    "authors": [
      "Sangho Suh",
      "Joseph Chee Chang",
      "Pao Siangliulue",
      "Amy X. Zhang",
      "Matt Latzke",
      "Jonathan Bragg",
      "Doug Downey",
      "Daniel S. Weld"
    ],
    "abstract": "AI agents can now search literature, generate hypotheses, analyze datasets, and run experiments at a scale difficult for researchers to match. Yet scaling scientific execution does not automatically scale researchers' ability to make sense of what agents produce. When researchers return to a long-horizon run, they must evaluate work they did not monitor: what the agent produced, which decisions shaped those outputs, and whether those decisions served the research goal. We frame this post-run sensemaking as a representation problem across three linked levels: goal, decision, and artifact. From this framework we developed Atlas, an agentic workspace with a trajectory tree, which renders the run as a branching structure showing what the agent chose and set aside, and artifact projections over six representations. In a within-subjects study (N=14), participants reported higher decision transparency, artifact sensemaking, and goal connection with Atlas than with a standard baseline, together with substantially lower subjective workload.",
    "published": "2026-10-22T00:15:23Z",
    "updated": "2026-10-22T00:15:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30548"
  },
  {
    "id": "2610.30537",
    "title": "PLE: Physical-Engineering's Last Exam",
    "authors": [
      "Rujun Han",
      "Yufan Zhuang",
      "Arijit Ray",
      "Han Yu",
      "Zoey CuiZhu",
      "George Lee",
      "Yifei Ming",
      "Binz Roy",
      "Varun Sakalkar",
      "Vishy Tirumalashetty",
      "Burak Gokturk",
      "Tomas Pfister",
      "Chen-Yu Lee"
    ],
    "abstract": "Frontier language models now score above 90% on popular knowledge benchmarks and are increasingly deployed as agents that carry out multi-hour professional work. Yet no existing benchmark tests whether they can perform the real-world, economically valuable work of a professional physical engineer, such as modelling physics and legal code requirements across a multi-format project corpus, optimising material and installation costs, and issuing 2D/3D engineering design packages that a licensed reviewer would sign off on. Existing engineering benchmarks focus on textbook question answering, isolated tool calls or self-contained toy design problems. As a result, most of these benchmarks are already saturated by leading agents and solving them is far away from delivering real engineering design. We introduce PLE, a benchmark of 85 long-horizon, agentic tasks in professional physical engineering consisting of electrical, civil, structural and mechanical engineering, where solving a task means completing a realistic, billable engineering deliverable. PLE combines two complementary curation paths. Expert-Authored tasks are created end to end by practising engineers from a professional data provider's expert pool. Co-Authored tasks start from problem statements written by practising engineers; an adversarial Creator-Solver agent pipeline constructs each task's realistic project environment, executable grader and reference deliverables before sending them to expert engineers for validation and difficulty intensification. We evaluate a variety of frontier LLMs under seven publicly available agent harnesses. Even the strongest configuration reaches a mean score of only 50.6%, while spending 27M tokens and 63 minutes per task on average, demonstrating the substantial gap between current agents and autonomous physical engineering design.",
    "published": "2026-10-21T23:45:56Z",
    "updated": "2026-10-21T23:45:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30537"
  },
  {
    "id": "2610.30528",
    "title": "Decision Making and Ride Comfort Evaluation Based on Lane-Change Prediction for Autonomous Vehicles",
    "authors": [
      "Mohamed Manzour",
      "Aditya Kumar",
      "Rubén Izquierdo",
      "Miguel Ángel Sotelo"
    ],
    "abstract": "Predicting surrounding vehicles' lane-change intentions enables autonomous vehicles to anticipate potential hazards and respond proactively rather than relying solely on reactive maneuvers. This study investigates the benefits of integrating lane-change prediction, based on knowledge graph embeddings and Bayesian inference, into autonomous vehicle decision-making. Three driving strategies are evaluated in risky merging scenarios simulated in CARLA: reactive driving, prediction-based longitudinal action, and prediction-based lateral action. The proposed prediction model anticipates the surrounding vehicle's lane change approximately 3-4 seconds before its occurrence, allowing the ego vehicle to adjust its behavior accordingly. In the representative simulation records, reactive driving results in a collision accompanied by aggressive deceleration. In contrast, prediction-based longitudinal action initiates early braking to establish a safe gap, while prediction-based lateral action performs a lane change when a safe adjacent lane is available. Both predictive strategies avoid collisions in the evaluated records. Compared with reactive driving, peak deceleration before impact is reduced by 31.5% with longitudinal action and 91.0% with lateral action. Additionally, an ISO 2631-1-based horizontal vibration estimate is used to provide a ride comfort assessment. Overall, the results highlight the potential of lane-change prediction to support safer and smoother driving through proactive decision-making, with additional insights into ride comfort provided by vibration-based estimates.",
    "published": "2026-10-21T23:22:49Z",
    "updated": "2026-10-21T23:22:49Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.30528"
  },
  {
    "id": "2610.30524",
    "title": "LLM2Cert: LLM Synthesis of Certificates with SMT/Lean Verification",
    "authors": [
      "Zhipeng Cao",
      "Peiyang Song",
      "Nikolaus Vertovec",
      "Weiru Cui",
      "Zhihao Yang",
      "Mingkang Liu",
      "Luxia Lin",
      "Bai Xue",
      "Alessandro Abate"
    ],
    "abstract": "Lyapunov functions and barrier certificates give state-space guarantees of stability and safety, but synthesizing and verifying them---especially for nonlinear, high-dimensional systems---remains an open challenge. Existing pipelines verify candidates with numerical solvers (sum-of-squares programs), interval methods, or satisfiability-modulo-theories (SMT) solvers, which often require relaxations, are conservative, or scale poorly with model dimension and nonlinearity. These limitations have also shaped benchmark design: standard test suites are dominated by low-dimensional polynomial systems chosen to suit what solvers can handle rather than what engineering applications require. We address both sides of this challenge. First, we introduce DynaCertBench, a benchmark of 105 instances: 80 non-redundant systems curated from the literature, extended with high-dimensional and control-constrained variants and new nonlinearly coupled systems, comprehensively spanning stability, region-of-attraction, forward-invariance, and safety tasks. Second, we present LLM2Cert, an LLM-driven framework that synthesizes candidate certificates and verifies them against their proof obligations: each obligation is routed to an SMT solver or directly to the Lean Proof-Repair agent. On DynaCertBench, LLM2Cert verifies 81 of 105 instances ($77.1\\%$), a $17.1$ percentage point improvement over one-shot proposal without feedback. On the 81 fixed certificates, LLM2Cert verifies 22 that All-SMT leaves unresolved. Code and data are available at https://github.com/FormalCert-AI/llm2cert.",
    "published": "2026-10-21T23:09:46Z",
    "updated": "2026-10-21T23:09:46Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.LG",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.30524"
  },
  {
    "id": "2610.30519",
    "title": "Unified Trajectory and 3D Pose Forecasting for Multi-Agent Sports Analysis",
    "authors": [
      "Marc Peral",
      "Guillem Capellera",
      "Luis Ferraz",
      "Antonio Rubio",
      "Stella Graßhof",
      "Dan Witzner Hansen",
      "Antonio Agudo"
    ],
    "abstract": "Forecasting future human motion requires jointly reasoning about an agent's global trajectory and 3D body pose, which are tightly coupled, particularly in team sports where multiple interacting players introduce complex social dynamics. We exploit a socio-temporal encoder that fuses trajectory and pose at the input level and models them jointly through shared factorized attention. The model is further enhanced by a per-joint loss reweighting scheme that emphasizes dynamic joints and prevents degenerate solutions, and a frequency-domain trajectory smoothing term that improves trajectory prediction while indirectly benefiting pose forecasting. To ensure fair comparison with prior joint forecasting methods, we identify and correct evaluation biases arising from overlapping sequence construction, adopting instead a non-overlapping protocol and a deterministic, oracle-free strategy for multi-future prediction. Our approach improves over prior joint forecasting methods on both WorldPose and 3DPW, with the largest gains on pose accuracy, demonstrating that the proposed joint formulation generalizes beyond the densely interactive scenarios that motivate it.",
    "published": "2026-10-21T22:57:56Z",
    "updated": "2026-10-21T22:57:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30519"
  },
  {
    "id": "2610.29129",
    "title": "Mitigating Reward Hacking in Realistic Scenarios Through Representation Engineering",
    "authors": [
      "Austin Meek",
      "Kyle Cox",
      "Matthew Nguyen",
      "Austin J. Brockmeier",
      "Steven Basart"
    ],
    "abstract": "Reward hacking is a major problem in current production machine learning systems, resulting in costly and dangerous failures. Here we study how to monitor for and mitigate reward hacking in realistic settings, including tool calls and long contexts. We apply a dynamic intervention to steering directions obtained by three different methods: difference-in-means vectors from labeled rollouts, gradient optimization-based vectors, and vectors extracted when models reference an anti-reward-hacking model spec. This dynamic intervention perturbs model representations less than uniform steering vector addition to the residual stream, allowing for more precise edits. We find that we are able to cheaply and significantly reduce reward hacking without correspondingly significant costs to model coherence or capability, and that steering vectors originally extracted from coding environments also generalize to reducing reward hacking in other domains. Our results pave the way towards latent space monitoring and control over realistic production systems.",
    "published": "2026-10-21T03:12:22Z",
    "updated": "2026-10-21T03:12:22Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.29129"
  },
  {
    "id": "2610.29126",
    "title": "Two for One: Privileged Learning for Resource-Constrained Screening",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Machine learning systems are often developed under data-rich conditions but deployed when only incomplete information is available. A natural example arises in colour fundus photography (CFP), where both eyes are commonly imaged because they can provide complementary information for ocular disease assessment. Prior approaches that exploit bilateral information either fuse both eyes in a single model or use knowledge distillation to compress a dual-eye teacher into a lightweight student that still requires both images at test time. However, bilateral acquisition may not always be feasible. We thus propose a privileged learning framework in which a teacher model has access to bilateral CFP images during training and learns representations informed by information from both eyes, while the student is trained to transfer this knowledge from the bilateral teacher using only a single-eye image as input. At inference, the student operates exclusively on this single-eye input and does not require the contralateral image. Experimental results show consistent improvements in area under the receiver operating characteristic curve over conventional monocular training, with the largest gains observed for left-eye images for the detection of age-related macular degeneration (0.931 vs. 0.966) and diabetic retinopathy (0.789 vs. 0.836).%, while requiring only a single-eye image at inference. By enabling models to benefit from bilateral information during training while requiring only a single-eye image at inference, our approach may support more reliable deployment in resource-constrained clinical and screening environments.",
    "published": "2026-10-21T03:09:41Z",
    "updated": "2026-10-21T03:09:41Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29126"
  },
  {
    "id": "2610.29122",
    "title": "StochIKM: Automated High-Fidelity Reconstruction of Individual Patient Data from Published Kaplan-Meier Curves",
    "authors": [
      "Liangze Ke",
      "Daniel Zelterman",
      "Wei Wei",
      "Guannan Gong"
    ],
    "abstract": "Individual patient data are the gold standard for secondary analysis of time-to-event evidence, but they are rarely released, and reconstruction from a published Kaplan-Meier figure could help. Existing methods all claim high fidelity, each judged by whichever agreements it happens to achieve, and each returns a single dataset although the map from figure to data is not bijective. We define fidelity explicitly: a dataset is admissible when it reproduces the risk table exactly, follows the digitized curve to within the image resolution, and respects the printed median, interval and event count. We propose StochIKM, a stochastic algorithm that digitizes the figure with a vision-capable language model and uses the high-fidelity definition as constraints, returning an admissible set of individual patient datasets. A solution is guaranteed to exist whenever the figure has been read correctly, so a failure indicts either the published figure or its digitization. In simulation and in 79 arms from published oncology trials, StochIKM reproduces the published risk tables and medians more closely than LLM-improved IPDfromKM, a high-impact alternative.",
    "published": "2026-10-21T03:05:49Z",
    "updated": "2026-10-22T02:47:45Z",
    "categories": [
      "cs.AI",
      "stat.AP"
    ],
    "url": "https://arxiv.org/abs/2610.29122"
  },
  {
    "id": "2610.29121",
    "title": "Recursive Self-Improvement on a Budget: Scoring Code Edits Before They Run",
    "authors": [
      "Erfan Darzi",
      "Sree Bhargavi Balija",
      "Sheng He"
    ],
    "abstract": "A coding agent that rewrites its own scaffold has to choose which proposed edit to expand before that edit has been evaluated, and the search then has to return one agent. Each run fits one linear readout on the parent's steering-split solve rate and eight coordinates of the proposed diff, from 96 scaffold edits labeled by four evaluations of a 16-instance fit split, and then freezes the coefficients. HumanEval+ reserves 48 instances as the steering split and Polyglot reserves 64. That split scores parents and keeps an archive of four nodes. Huxley-Gödel Machine selection draws a parent by Thompson sampling on the steering counts of nodes that have already been evaluated, and it expands the child that parent proposes. Every method then returns the earliest evaluated node whose steering-split solve count is maximal. The tables report the held-out score of that node on the other 100 HumanEval+ instances and the other 145 Polyglot instances, next to the root scaffold and the calibration edit with the highest fit-split label. Twelve runs of GPT-4o return a node at 87.0% on held-out HumanEval+, against 84.2% for the parent-rate ablation. On that split Huxley-Gödel Machine selection returns 85.1%, the root is at 81.2%, and the calibration-best edit is at 82.8%. On the same split Claude Sonnet 4.5 returns 86.6%, beside 86.5% for Huxley-Gödel Machine selection, 85.3% for the parent-rate ablation, and 85.1% for the calibration-best edit.",
    "published": "2026-10-21T03:04:25Z",
    "updated": "2026-10-21T03:04:25Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29121"
  },
  {
    "id": "2610.29120",
    "title": "An Eco-Friendly Tourism Trip Planner Driven by Z-Number Uncertainty: Evidence from Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul",
    "authors": [
      "Aziz Nuriyev",
      "Sherzod Turaev",
      "Saja Al-Dabet",
      "Mary John",
      "Kanan Qasimzade",
      "Alihuseyn Orujzada",
      "Fatima Alblooshi",
      "Aisha Al Ali"
    ],
    "abstract": "Deployed tourism trip planners ingest travel times and ratings as exact numbers, although routing services return travel times that vary with the hour of departure and a platform rating may rest on a handful of reviews or on hundreds of thousands. We present an eco-friendly trip planner that represents both quantities as Z-numbers, which pair a fuzzy restriction on a value with a fuzzy reliability on the evidence behind it, and that constructs them directly from routing-service observations at six departure hours and from platform review counts rather than from linguistic elicitation. A hybrid loss combines score, carbon, travel-time, and reliability terms, and an adaptive large neighborhood search returns single-day itineraries through a conversational front end. We compare the planner with a crisp-mean baseline under an identical optimizer in Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul, with fifteen points of interest and thirty seeds per city, and we evaluate the selected itineraries on their trip carbon and their total travel time. Pooled over 150 seed-paired runs, the planner lowers trip carbon from 3.24 to 2.61 kg (19.3%, Wilcoxon p = 0.017; city-clustered bootstrap interval 6.4% to 26.7%) and travel time from 123 to 109 minutes per trip (11.5%, p = 2.8e-10; interval 5.0% to 18.2%). The travel-time reductions survive a Holm correction in Baku, Istanbul, and Abu Dhabi; the carbon reduction is significant in Baku and large but uncertain in the dispersed catalogs of Dubai and Abu Dhabi; and neither metric changes in Tashkent. Review counts are estimates of at least 3,000 for every point of interest, so rating reliability does not vary, and with a single baseline, the results establish feasibility and direction rather than a general advantage. Code, routing caches, frozen routing tables, and per-seed results are openly released.",
    "published": "2026-10-21T03:03:19Z",
    "updated": "2026-10-23T06:46:10Z",
    "categories": [
      "physics.soc-ph",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.29120"
  },
  {
    "id": "2610.29114",
    "title": "MHeatmap: Two-Walk Laplacian Reordering and Mosaic Layout for Rectangular Matrix Visualization",
    "authors": [
      "Juntang Wang",
      "Sheng'en Li",
      "Liming Zhu",
      "Yihan Wang",
      "Siyuan Cao",
      "Hao Wu",
      "Man Zhang",
      "Shixin Xu",
      "Dongmian Zou"
    ],
    "abstract": "Weighted rectangular matrices record relations between two types of objects, such as occupations and industries, documents and terms, origins and destinations, or annotated classes and computed clusters. Their heatmaps become difficult to read when arbitrary row and column orders scatter related objects, while equal size cells hide large differences in row and column totals. We present MHeatmap (Mosaic Heatmap), which addresses these problems in two stages. Two-Walk spectral seriation first represents the matrix as a weighted bipartite graph. Ordinary bipartite ordering uses only observed row to column links. Two-Walk also uses length-two walks, so rows that share columns and columns that share rows receive explicit similarity links. Sorting a Fiedler vector of the resulting graph Laplacian gives coordinated row and column orders. The Mosaic layout then partitions a unit square so that row height is proportional to the row total and column width is proportional to the column total, while color represents the observed entry. We prove how the Two-Walk energy combines direct alignment with shared-neighbor smoothness, derive an exact matrix vector product that permits sparse computation, and formalize the tiling and area semantics of Mosaic. Across 300 synthetic matrices and seven real data sets, Two-Walk obtains the lowest normalized 2-SUM in all 15 synthetic regimes and the highest Band@10% in 14. The largest gains occur when shared neighborhoods express the latent relational structure.",
    "published": "2026-10-21T02:55:57Z",
    "updated": "2026-10-21T02:55:57Z",
    "categories": [
      "cs.LG",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.29114"
  },
  {
    "id": "2610.29110",
    "title": "GRAM: Group-wise Rank-Aware Model Merging via Subspace Alignment",
    "authors": [
      "Di Wu",
      "Shuaidong Pan"
    ],
    "abstract": "Merging different models into a single model is highly desirable for multi-task deployment, particularly in regulated domains like healthcare. In such settings, models are often locally fine-tuned due to strict data privacy policies, necessitating that aggregation operates exclusively on the fine-tuned weights. Existing methods apply a uniform merge across all tasks, ignoring the geometric relationships among their learned subspaces. When task updates occupy misaligned subspaces, projecting them onto a shared low-rank basis discards task-relevant directions, a failure mode named \\emph{subspace interference}. Through this study, we show that the per-task projection error of a merged model is governed by the principal-angle alignment between each task and the shared subspace, so that grouping geometrically compatible tasks provably reduces this error within each group. Motivated by this observation, we propose \\textbf{Group-wise Rank-Aware Model Merging (GRAM)}, which uses the principal-angle geometry of task vectors to decide which tasks should be merged together and then performs a standard SVD-based merge within each coalition; the pipeline requires only the fine-tuned weights at merge time. With only one additional model ($\\nK{=}2$), GRAM significantly mitigates subspace interference and consistently outperforms prior merging methods across language understanding (GLUE with Flan-T5), 8-task CLIP vision, and medical instruction tuning (Qwen2-7B-Instruct with four English/Chinese medical LoRAs).",
    "published": "2026-10-21T02:50:46Z",
    "updated": "2026-10-21T02:50:46Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.29110"
  },
  {
    "id": "2610.29108",
    "title": "WaFIR: Wavelet-Fourier Mixture-of-Experts with Subband-Adaptive Routing for Blind All-in-One Image Restoration",
    "authors": [
      "Trong Nhan Nguyen",
      "Vu Hoang Minh Doan",
      "Thanh Dat Le",
      "Truong Tien Vo",
      "Thi Thu Ha Vu",
      "Tan Hung Vo",
      "Jaeyeop Choi",
      "Junghwan Oh",
      "Truong-Son Hy"
    ],
    "abstract": "Blind all-in-one image restoration must adapt a shared model to heterogeneous and sometimes mixed degradations without a task label at test time. We introduce WaFIR, a decoder module that decomposes features into Haar subbands, summarizes each subband with a compact Fourier descriptor, and routes it to prompt-conditioned spectral modulation experts. Unlike image-level frequency conditioning, WaFIR makes routing decisions at the subband level, enabling frequency-specific processing while retaining the task context learned by the backbone. Under a unified training and evaluation protocol for denoising, deraining, and dehazing, WaFIR improves average PSNR over the three tasks by 0.48 dB over the PromptIR baseline and by 0.38 dB over the recent Up-Restorer. Matched-capacity and routing controls show that the gain is not explained by additional parameters alone. On unseen noise intensities, descriptor-based routing is more robust than a discrete label-conditioned alternative and remains on par under compound degradations, while routing analyses show stable subband-dependent expert use across degradation types. These results support subband frequency structure as an interpretable complement to prompt-based conditioning for blind image restoration. Code is available at https://anonymous.4open.science/r/WaFIR/README.md",
    "published": "2026-10-21T02:50:14Z",
    "updated": "2026-10-21T02:50:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29108"
  },
  {
    "id": "2610.29107",
    "title": "PhyMo: Learning Physical Dynamics with Accurate and Continuous Motion from Multi-View Videos",
    "authors": [
      "Shangjia Liu",
      "Jinxi Li",
      "Siyuan Zhou",
      "Bo Yang",
      "Bing Wang"
    ],
    "abstract": "Recovering dynamic 3D scene geometry, appearance, and the physical motion states that govern scene evolution from multi-view videos is important yet challenging. A key difficulty is that appearance can be deceptive. Under rendering supervision alone, a model may fit the observed images by changing color or opacity to compensate for inaccurate deformation, rather than recovering the true evolving geometry and motion. This issue is especially severe in scenes with fast or locally complex motion, where inaccurate trajectories can still produce plausible images over the observed frames, but lead to unreliable reconstruction and discontinuous future prediction. In this paper, we propose PhyMo, a framework for learning evolving dynamics from multi-view videos. We introduce a Motion-Aware Trajectory Representation that drives the model to recover accurate motion from deformation, rather than relying on appearance shortcuts to explain observed motion. On top of this, we propose a Continuous Motion Evolution module with bidirectional kinematic continuity constraint to promote temporally consistent evolution of displacement, velocity, and acceleration. Together, these designs yield geometrically faithful interpolation and continuous motion extrapolation. Experiments on four dynamic scene benchmarks demonstrate state-of-the-art performance.",
    "published": "2026-10-21T02:49:38Z",
    "updated": "2026-10-26T09:25:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29107"
  },
  {
    "id": "2610.29106",
    "title": "DriftNeRF: Cross-Ray Density Drifting for Sparse-View Neural Radiance Fields",
    "authors": [
      "Juntang Wang",
      "Yihan Wang",
      "Sheng'en Li",
      "Hao Wu",
      "Dongmian Zou",
      "Shixin Xu"
    ],
    "abstract": "Neural Radiance Fields (NeRF) synthesize photorealistic novel views from dense image collections, but degrade sharply when few views are available. We attribute a specific, measurable defect to the objective itself: the rendering loss is a sum over independent rays and contains no term comparing densities that different rays assign to the same region of space, so nearby 3D points can settle on contradictory densities while every training pixel is reproduced correctly. We make this quantity explicit by measuring cross-ray density disagreement directly during training, and show that it stays high in vanilla NeRF, falls only incidentally under frequency-based regularization, and moves together with held-out quality in the sparse regime. We then close the gap with DriftNeRF, a drop-in regularizer that instantiates the drifting-field template on density samples: a masked exponential kernel aggregates densities from nearby points on other rays into a stop-gradient consensus target, and the resulting drifting field penalizes unsupported disagreement while leaving agreed-upon boundaries intact. The regularizer reads only sampled positions, ray identifiers, and predicted densities, so it requires no pretrained model, external geometry, or additional images, and transfers across field parameterizations. On NeRF-Synthetic it reduces residual disagreement by an order of magnitude, and across NeRF-Synthetic, DTU, and LLFF it improves 3-view PSNR over the strongest MLP-NeRF baseline by 0.42-0.65 dB and remains competitive with sparse-view Gaussian pipelines under a matched protocol without their depth, flow, or covisibility preprocessing.",
    "published": "2026-10-21T02:49:34Z",
    "updated": "2026-10-21T02:49:34Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29106"
  },
  {
    "id": "2610.29104",
    "title": "From Canon to Nikon: Camera Domain Shift and Potential Equity Implications in Retinal AI",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Diabetic retinopathy is a leading cause of preventable blindness, yet access to regular screening remains limited worldwide. AI offers a scalable approach, but its performance can be sensitive to image quality and acquisition conditions. In a Brazilian cohort of 8,524 patients, retinal images acquired with the Nikon NF5050 were more than twice as likely to have inadequate image quality compared with those acquired with the Canon CR-2, despite refurbished Canon systems costing more than twice as much as Nikon systems. This potential cost-quality trade-off highlights an important consideration for the reliability of AI systems deployed across heterogeneous imaging systems. Using a frozen pretrained retinal foundation model, we systematically evaluate whether camera-associated performance differences persist across 12 retinal disease classification tasks, four input resolutions, and five downstream classifiers. We find that camera-associated performance differences vary substantially across tasks, and that neither higher input resolution nor classifier choice consistently mitigates cross-camera variation. These findings identify camera platform as a potentially overlooked source of performance variability, with implications for the safety and reliability of retinal AI when deployed across heterogeneous imaging systems. We release all source code, evaluation scripts, and per-task results on GitHub to support reproducible benchmarking.",
    "published": "2026-10-21T02:47:39Z",
    "updated": "2026-10-21T02:47:39Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29104"
  },
  {
    "id": "2610.29102",
    "title": "Diffusion Posterior Sampling with Uncertain Forward Models",
    "authors": [
      "Wentao Shangguan",
      "Vivek K Goyal"
    ],
    "abstract": "Diffusion posterior samplers reconstruct signals by combining a pretrained diffusion prior with a measurement likelihood specified by a forward model and a noise model. Calibration and reference data can characterize uncertainty in the forward model's parameters, such as blur kernels or detector responses. Fixing these parameters at estimated values leaves their uncertainty out of the likelihood, and parameter errors are thus absorbed into the reconstruction. We introduce an uncertainty-aware likelihood (UAL), a Gaussian approximation to the marginal likelihood obtained by integrating over the uncertain parameters. For each candidate signal, UAL propagates parameter uncertainty into a structured measurement covariance, reducing the quadratic penalty along residual directions that parameter variation can explain. Existing samplers can use UAL in their data updates while retaining their pretrained diffusion priors and sampling schedules. Under a fixed Gaussian nuisance model, we bound likelihood error from linearization and average divergence between the exact marginal and UAL posteriors. We compare samplers with and without UAL across six inverse problems spanning Gaussian and motion deblurring, CT, MRI, ultrasound, and fluorescence microscopy, and find improvements in reconstruction and ensemble prediction. UAL reduces geometric mean MSE by 9% to 20% across samplers in the main Gaussian-deblurring setting and by 51% to 92% in motion deblurring when non-blind samplers use the population-mean kernel. In motion deblurring, DAPS and PnP-DM with UAL also give 6.2 to 6.4 dB higher ensemble-mean PSNR than published BlindDPS and Fast Diffusion EM. On the ablation set, UAL outperforms trace-matched isotropic inflation for PnP-DM in both deblurring tasks; in motion deblurring, it also exceeds the best-tested fixed scalar data weighting by 3.3 dB for PnP-DM and 4.2 dB for DAPS in average PSNR.",
    "published": "2026-10-21T02:47:28Z",
    "updated": "2026-10-21T02:47:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29102"
  },
  {
    "id": "2610.27702",
    "title": "Beyond Calibration: Temporal LLM Confidence Assessment Across Languages and Local Settings",
    "authors": [
      "Sahil Kale"
    ],
    "abstract": "Large language models are expected to estimate their own uncertainty, with confidence signals used to guide retrieval, adaptive compute allocation, routing, and selective abstention. We investigate whether confidence signals measured at different temporal stages of problem solving encode distinct forms of epistemic information and remain reliable beyond English-centric settings. Inspired by classical meta-memory theory, we distinguish anticipatory pre-solve confidence (Feeling-of-Knowing, FOK) from retrospective post-solve confidence (Judgement-of-Learning, JOL). We evaluate these signals across two frontier LLMs, multiple reasoning domains, translated Marathi benchmarks, and a newly constructed benchmark of genuinely local Marathi factual questions. Across settings, the cheaper pre-solve signal remains weakly calibrated, while post-solve confidence generally provides stronger epistemic alignment despite its additional inference cost. Confidence behaviour transfers surprisingly well under direct language translation, with calibration trends largely preserved between English and Marathi, but degrades substantially on local Marathi knowledge, suggesting that linguistic transfer alone is insufficient for region-specific information needs. Finally, hallucinated responses maintain persistently elevated confidence after answer generation, highlighting important limitations of current LLM self-assessment mechanisms.",
    "published": "2026-10-20T06:19:35Z",
    "updated": "2026-10-20T06:19:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27702"
  },
  {
    "id": "2610.27699",
    "title": "E8-QAT: Efficient 2-Bit Quantization-Aware Training with Implicit Lattice Codebooks",
    "authors": [
      "Xinyu Lei",
      "Hong Huang",
      "Jiebin Zhang",
      "Hongyu Li",
      "Jinlong Song",
      "Decheng Wu",
      "Guanghua Yu",
      "Jianchen Zhu",
      "Sujian Li"
    ],
    "abstract": "Low-bit quantization reduces the memory footprint of large language models, but preserving accuracy with efficient training remains challenging. Scalar quantization encodes weights independently, while explicit-codebook vector quantization introduces costly search during training. We propose E8-QAT, a 2-bit quantization-aware training framework that uses the $E_8$ lattice as an implicit eight-dimensional codebook. It jointly quantizes weight groups through arithmetic projection without storing or searching an explicit codebook during the training forward pass. A 2-bit core encoding and sparse extension preserve the selected lattice points exactly, adding less than 0.1\\% to core index storage. On Qwen3.6-35B-A3B, E8-QAT matches the performance of the full-precision model in terms of the average score across the four tasks. E8-QAT improves over the state-of-the-art baseline by 2.03\\% on IFEval and by 1.51\\% on LiveCodeBench, under the same data, schedule, and bit width. The 2-bit representation reduces peak memory by 80\\% and supports a $4\\times$ larger batch. At each representation's largest feasible batch, E8-QAT reaches $1.97\\times$ the decoding throughput of BF16.",
    "published": "2026-10-20T06:17:09Z",
    "updated": "2026-10-20T06:17:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27699"
  },
  {
    "id": "2610.27698",
    "title": "VLA-Retain: Benchmarking Cross-Dimension Effects of Vision Tuning in VLAs",
    "authors": [
      "Borui Xu",
      "Han Chen",
      "Bingsheng He",
      "Ming Wu",
      "Jason Zeng",
      "Michael Heinrich"
    ],
    "abstract": "Vision-language-action (VLA) models transfer knowledge from large-scale pretraining into robot control, but their manipulation performance remains sensitive to changes in observation conditions, which recent work addresses by fine-tuning the visual module on target-domain data. However, it remains unclear how such adaptation affects robustness beyond the target condition, as existing robustness benchmarks only evaluate models without fine-tuning and adaptation studies only report the target gain. Measuring this cross-dimension effect requires separating target gains from off-target changes, isolating adaptation effects from architectural differences, ruling out generic forgetting, and comparing tuning choices. Therefore, we introduce VLA-Retain, a benchmark that compares five open VLA models, tuned on Camera-view or Sensor-noise data, with their own base checkpoints on LIBERO-Plus dataset spanning seven perturbation dimensions. Our study reveals four findings. First, targeted vision tuning is not local, and its target gain does not predict retention. Mean off-target gain is negative in 8 of 10 model--domain configurations. Under Camera-view tuning, X-VLA gains $69.4$ percentage points on the target but loses $4.6$ points on average elsewhere, whereas OpenVLA-OFT gains $39.3$ and $1.4$ points, respectively. Second, these regressions are not explained only by performance loss on the same tasks without perturbations. Third, broader training coverage raises overall gain over target-specific training but does not eliminate dimension-level regressions. Fourth, tuning strategies are model-dependent, as DELTA-style feature preservation raises X-VLA's mean off-target gain to $+1.2$ points but lowers OpenVLA-OFT's to $-23.1$. Overall, these findings show that target-domain success alone is insufficient and highlight cross-dimensional retention as a key criterion for targeted VLA adaptation.",
    "published": "2026-10-20T06:17:00Z",
    "updated": "2026-10-20T06:17:00Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27698"
  },
  {
    "id": "2610.27696",
    "title": "PanoGraphGS: Unifying Panoptic Segmentation and Hierarchical 3D Scene Graphs with Gaussian Splatting",
    "authors": [
      "Jinghan Gao",
      "Siyu Wang",
      "Dongyu Feng",
      "Yiyuan Pan",
      "Rong Xiong"
    ],
    "abstract": "3D scene graphs support language-guided navigation by organizing physical entities and their containment and spatial relations into hierarchical maps. Building such structured maps requires a scene representation that consistently distinguishes semantic regions and object instances across viewpoints. To this end, we present PanoGraphGS, a unified framework that integrates panoptic 3D Gaussian representation learning with hierarchical 3D scene graph construction. The framework learns semantic and instance features on shared Gaussian geometry. Prototype-based semantic learning and association-based instance learning produce consistent panoptic predictions across viewpoints. The learned representation supports novel-view panoptic segmentation and direct Gaussian-level panoptic decoding. A semantic-aware scene graph module further recovers a floor-room-stuff-object hierarchy with containment and spatial relations. We further release NaviGS, a real-world dataset for panoramic scene understanding. The dataset provides 3DGS, mesh, RGB, semantic, and depth data. For 3D scene graph identification, PanoGraphGS outperforms the strongest evaluated baseline in object-node accuracy by more than 50\\% points on average across Replica and NaviGS. PanoGraphGS also achieves state-of-the-art performance among the evaluated methods in 2D panoptic segmentation. These results demonstrate the effectiveness of PanoGraphGS in both hierarchical 3D scene understanding and 2D panoptic segmentation. The project website is available at: https://github.com/gaojh0333/PanoGraphGS.",
    "published": "2026-10-20T06:15:59Z",
    "updated": "2026-10-20T06:15:59Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.27696"
  },
  {
    "id": "2610.27692",
    "title": "A Principled Optimal Transport Framework for Frame Selection in Long Video Understanding",
    "authors": [
      "Ziwei Zhao",
      "Yuhang Liu"
    ],
    "abstract": "Long-video understanding with multimodal LLMs is fundamentally constrained by the mismatch between video length and the model's limited visual context budget, making frame selection essential for practical reasoning. Existing query-aware methods typically rely on heuristic pipelines: they assign one-dimensional query-conditioned scores to frames and then apply sampling, ranking, or extraction rules to form the final subset. While effective in practice, such methods are generally not derived from an explicit optimization objective and struggle to capture the heterogeneous evidence required for complex reasoning. In this paper, we revisit long-video frame selection from a principled optimization perspective. We formulate it as a structured evidence-allocation problem and propose OTFS, an optimal transport framework that maps multiple evidence sources onto video frames. To reflect the asymmetry of this problem---important evidence should be preserved, whereas redundant frames need not absorb mass---we instantiate this view with a semi-unbalanced entropic optimal transport objective and an efficient solver, OTFS-Sinkhorn. Combined with an exact dynamic program for coverage-aware subset extraction, OTFS yields a practical two-stage training-free pipeline. We further show that, in the single-source case, our formulation induces a Gibbs-type distribution over frames, making Q-Frame's temperature-scaled distribution a special case of our framework while also providing a broader perspective for understanding related prior methods. Experiments on three long-video understanding benchmarks show that OTFS consistently outperforms strong training-free baselines. Codes are available at https://github.com/barry664/OTFS.",
    "published": "2026-10-20T06:12:30Z",
    "updated": "2026-10-20T06:12:30Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27692"
  },
  {
    "id": "2610.27691",
    "title": "EASformer: Environment-Action-State Alignment for Industrial Generative Ranking",
    "authors": [
      "Bohao Li",
      "Dinglun Cao",
      "Pengcheng Huang",
      "Yingda Tang",
      "Zhiting Zhao",
      "Yi Cao",
      "Jilei Fu",
      "Miao Yan",
      "Tianying Liu",
      "Heng Chang",
      "Bowen Du"
    ],
    "abstract": "Modern industrial ranking systems increasingly adopt generative recommendation (GR) paradigms, in which user behavior sequences and non-sequential (NS) features are tokenized and jointly modeled by Transformer-style backbones. This unified formulation provides a scalable interface for modeling long histories and heterogeneous features. However, sequence and NS representations often carry asymmetric semantics: historical representations may combine environment context with observed-action semantics, whereas candidate-side NS representations contain no observed action but incorporate richer supplementary context, such as user-item interaction features and recent behavior lists. Direct interaction between such representations can make query-key dot products compare different semantic objects, limiting meaningful cross-token interaction. To fill this gap, we propose EASformer, an Environment-Action-State disentangled architecture for industrial app ranking. EASformer constructs an explicitly aligned context environment space shared by historical and non-sequence tokens, while disentangling user actions from historical token and candidate-specific context form non-sequence tokens. Based on this aligned space, EASformer enables complementary historical action retrieval and state-conditioned action prediction. Furthermore, the disentangled design supports a Cloze-style self-supervised objective by masking historical actions and reusing the candidate prediction pathway. On an offline benchmark from a real-world industrial app marketplace, EASformer achieves an AUC of 0.89411, yielding a 0.88% relative improvement over the deployed baseline. Online A/B tests further support this advantage, with relative eCPM lifts of 1.26% and 3.94% across two real-world ranking scenarios.",
    "published": "2026-10-20T06:08:07Z",
    "updated": "2026-10-20T06:08:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27691"
  },
  {
    "id": "2610.27690",
    "title": "NeoWorld-3: From Pixels to Code-Defined Physical Worlds",
    "authors": [
      "Eachen Soong",
      "Zijian Niu",
      "Haoran Xu",
      "Yihong Dong",
      "Yunbo Wang",
      "Xiaokang Yang"
    ],
    "abstract": "Simulation-ready world reconstruction demands physical interactivity beyond visual realism, which existing black-box 3D generation fails to deliver. We present NeoWorld-3, a coding-agent framework that reconstructs interactive 3D worlds from visual observations via tunable, executable programs. At its core, NeoSDK provides the underlying computational engine for low-level geometries, part composition, differentiable parameter refinement, and physics validation. At the same time, NeoMCP exposes these capabilities as structured, tool-callable APIs for vision-language agents to visually inspect, edit code, and iteratively refine programs. Through a hierarchical coordinator-worker architecture, the framework scales seamlessly from standalone articulated objects to complex compositional scenes. Evaluations across object-level and scene-level reconstruction benchmarks demonstrate that NeoWorld-3 achieves state-of-the-art geometric fidelity and physical readiness. Crucially, manipulation trajectories planned within our reconstructed twins achieve successful zero-shot execution on a physical dual-arm robot, completing the Real-Sim-Real loop.",
    "published": "2026-10-20T06:05:06Z",
    "updated": "2026-10-20T06:05:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27690"
  },
  {
    "id": "2610.27684",
    "title": "Pattern Intelligence: Unsupervised, LLM-Interpreted Discovery of Systematic Underpayment and Denial Patterns in Healthcare Revenue Cycle Management",
    "authors": [
      "Harshil Lodhiya",
      "Alex McManus"
    ],
    "abstract": "Healthcare providers lose substantial revenue to systematic payer underpayments and claim denials, yet identifying the recurring, correctable patterns behind them remains largely manual and does not scale to hospital claim volumes. We present Pattern Intelligence, a deployed system that discovers such patterns without supervision by clustering claims on their adjudication behaviour rather than their identity. Each claim is embedded in a 130-dimensional vector combining per-line expected-versus-actual payment ratios, claim adjustment reason (CARC) codes, denial and payment signals, and service composition. Payer and contract identity are deliberately excluded from the distance metric - we show they dominate the geometry and collapse clusters into trivial per-payer groups - and are reintroduced only as a post-hoc segmentation (by contract and visit type) that keeps every surfaced pattern coherent and actionable. We cluster with HDBSCAN, recover structure from the noise set via second-pass sub-clustering, and gate low-confidence memberships. A large language model translates each centroid into an analyst-ready description of dominant procedures, adjustment reasons, and failure mode. We report a recurring finding: roughly one-third to one-half of high-dollar denials, depending on tenant and segmentation, form an irreducible long tail that no density-clustering configuration or representation we tried groups - a domain property, we argue, rather than a modeling deficiency. We evaluate validity through cluster-coherence analysis and quantify impact with a recoverable-opportunity ($) metric on two production tenants (approx. 10K and 157K claims) within a six-tenant deployment. Rather than a new algorithm, the contribution is a problem formulation, a representation-design insight, and empirical findings from production.",
    "published": "2026-10-20T05:59:14Z",
    "updated": "2026-10-20T05:59:14Z",
    "categories": [
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.27684"
  },
  {
    "id": "2610.27682",
    "title": "Temporal Evidence Allocation For Longitudinal Clinical Retrieval: A Position And Technical Report",
    "authors": [
      "Soumya Ranjan Sahoo",
      "Divya Bharti",
      "Sanand Sasidharan"
    ],
    "abstract": "Electronic health records are written to support care, not retrieval. Across years of oncology notes, the primary diagnosis is restated in report after report, while the events that shape a patient's course, such as a recurrence or a change in therapy, may be recorded only once. A retriever that ranks passages by similarity to the query keeps returning the repeated material and can miss these transitions, that is, it exhibits temporal redundancy across historical narratives. We argue that longitudinal clinical retrieval should be treated as allocating a limited evidence budget across time, not just ranking by relevance. We separate the task into three objectives: temporal evidence allocation, candidate reconstruction, and clinical validation. In Study A (13 clinical queries over 20 patient records, with two-stage reconstruction), the Temporal-15 configuration reaches a milestone slot recall of 0.538, compared with 0.388 for the Global-50 baseline. However, it also retrieves far more evidence (496 versus 50 indexed units per query), so the gain cannot be credited to allocation alone. When evidence is held fixed, removing prompted precedence rules raises schema-order reversals from 0.010 to 0.080. A five-patient, single-query pilot with fixed budgets finds that wider temporal coverage does not reliably yield more dated milestones. Together, these results suggest that how much a record says about a period is a poor guide to how useful that period is as evidence. Because no expert reference timelines are available, our measurements describe retrieval behavior rather than clinical accuracy. This position and technical report presents the retrieval analysis behind the Onco-CONSTRUE framework and sets out a research agenda for budget-constrained longitudinal clinical retrieval.",
    "published": "2026-10-20T05:54:39Z",
    "updated": "2026-10-20T05:54:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27682"
  },
  {
    "id": "2610.27678",
    "title": "PhonoBridge: Error-Aware Phoneme-Mediated EMG-to-Text Reconstruction",
    "authors": [
      "Wen Qiu",
      "Jiacheng Zhang",
      "Xuanda Chen",
      "Siqi Cai",
      "Haizhou Li"
    ],
    "abstract": "Electromyography (EMG) provides a non-invasive means of decoding silently articulated speech into text, but accurate decoding remains challenging due to limited availability of paired EMG-text data. We introduce PhonoBridge, a two-stage framework comprising a channel-aware EMG-to-phoneme frontend and a large language model (LLM) backend for text reconstruction. The frontend is trained on paired EMG-text data that consists of channel-wise feature extraction, cross-channel fusion, and electrode embeddings. With phonemes as the intermediate representation, we expand the backend's training data by converting LibriSpeech transcripts into phoneme-text pairs without additional EMG recordings. To adapt the LLM to frontend noise, we introduce Error-Profile-Guided Augmentation (EPGA), which perturbs transcript-derived phoneme sequences according to error patterns estimated from frontend predictions, generating additional training pairs for the LLM. On the Open Vocabulary silent-speech dataset, PhonoBridge achieves 24.77% WER, outperforming the previously reported best of 28.27% on the same test split.",
    "published": "2026-10-20T05:48:21Z",
    "updated": "2026-10-20T05:48:21Z",
    "categories": [
      "cs.SD",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.27678"
  },
  {
    "id": "2610.27677",
    "title": "CovNav: Conformal Prediction-Guided Adaptive Inference for Object Goal Navigation",
    "authors": [
      "Pengying Wu",
      "Zhejia Wen",
      "Kang Ding",
      "Kangjie Zhou",
      "Chunxuan Jiao",
      "Wei Pan",
      "Xiangli Nie",
      "Chang Liu"
    ],
    "abstract": "In object goal navigation (ObjectNav), an embodied agent must find a target object (e.g., \"find a bed\") in a previously unseen environment, relying on spatial commonsense such as object co-occurrence. Large Language Models (LLMs) encode this commonsense, but deploying them on robots exposes a trade-off between reasoning quality and efficiency: cloud-based models incur latency and privacy risks, whereas small on-device LLMs are fast but prone to hallucinated spatial judgments. Hybrid reasoning LLMs offer both a fast non-thinking mode and a slow thinking mode, which raises a key question for embodied agents: when is slow thinking worth its cost? We propose CovNav, a training-free framework that answers this question with Conformal Prediction (CP), turning dual-process (System 1 / System 2) inference into an uncertainty-aware decision. Much like recent decision models such as Jev, CovNav casts each spatial query as a structured binary decision rather than free-form generation: a local LLM in fast mode judges whether the target is likely near an observed object, CP converts its token probabilities into a prediction set, and only ambiguous queries are escalated to slow chain-of-thought reasoning. The object-pair formulation keeps calibration tractable and supports open-set objects through off-the-shelf detectors. Experiments on Gibson and HM3D show that CovNav surpasses the strongest zero-shot baseline by 0.8 and 1.7 percentage points in success rate on HM3D v1 and v2, while invoking slow reasoning for only 12.4% of queries and retaining most of the gain of always-on thinking at a fraction of its latency. Real-robot experiments on a TurtleBot 4 further validate the approach. CovNav shows how calibrated uncertainty can decide when an embodied agent should think slowly, offering a principled form of adaptive test-time reasoning for LLM-based robots.",
    "published": "2026-10-20T05:47:26Z",
    "updated": "2026-10-20T05:47:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27677"
  },
  {
    "id": "2610.27672",
    "title": "Reusing Assurance Evidence in AI Pipelines: Validity Conditions, a Fail-Closed Release Gate, and a Replay of 714 Public Data Version Control Pipelines",
    "authors": [
      "Atanu Mukhopadhyay",
      "Shravya Reddy Nalla"
    ],
    "abstract": "Rerunning every governance control after every change to an artificial intelligence (AI) pipeline is expensive, so teams reuse earlier results. Reuse is safe only if each control's declared dependencies cover everything that can change its outcome, and only if the release gate checks that reused evidence describes the candidate being released. This article makes both conditions explicit and measures how often the first fails in practice. It defines when a signed evidence record is valid for a candidate and gives sufficient conditions under which change-local re-execution reaches the same release decision as rerunning every control. A reference gate implementing these checks with Ed25519 digital signatures blocks eight of nine manipulation scenarios, against one for a gate that trusts the planner and three for a gate that only verifies signatures; a dependency the policy never declared passes every gate. A replay of 38,083 commits from 714 public Data Version Control (DVC) pipelines measures that failure mode. Reusing stage results according to declared dependencies avoids 83.4% of stage executions, but in 3.3% of commits it reuses a stage whose imported code or referenced configuration changed, and 31% of pipelines are affected. A manual audit confirms the undeclared dependency in 36 of 40 sampled events. Evaluation stages, whose outputs are the evidence, are the most exposed. Adding each stage's static import closure lowers stale reuse to 0.4% while still avoiding 81.6% of executions; sampled shadow re-execution removes far less, and rerunning everything after unexplained changes avoids only 45.3%.",
    "published": "2026-10-20T05:37:51Z",
    "updated": "2026-10-20T05:37:51Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.27672"
  },
  {
    "id": "2610.26384",
    "title": "Answer Delivery Under a Shared Token Budget: An Audited Study of Stopping and Finalization",
    "authors": [
      "Yupeng Chang",
      "Linyuan Gao",
      "Zhiyuan Li",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "An inference budget is useful only when the system delivers an answer within it. We study a fixed-budget policy combining first-valid-box stopping with a charged finalization cue. On 100 fresh, independently audited GSM8K test questions per model, it improves delivered endpoint accuracy over first-box stopping by 8.0 percentage points for Qwen3-4B-Thinking-2507 and 7.0 for DeepSeek-R1-Distill-Llama-8B. A prelocked repeat on the same questions gives 7.0 and 10.0 points; neither seed shows a gross harm relative to first-box stopping. The point estimates of incremental physical-slot savings are below one percent. A finalization-only ablation separates cue recovery from stopping, and a fixed scalar reader tests extraction as an alternative explanation. The cue is prior art; the contribution is a component and readout analysis with charged injections and verified paths. Results cover two checkpoints, one task, one prompt family, and two fixed seed conditions.",
    "published": "2026-10-19T13:35:12Z",
    "updated": "2026-10-19T13:35:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26384"
  },
  {
    "id": "2610.26383",
    "title": "BOSS: Token-Budgeted Online Sampling and Selection for LLM Reasoning",
    "authors": [
      "Yupeng Chang",
      "Yahan Li",
      "Chenlu Guo",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Test-time scaling can improve LLM reasoning, but existing approaches typically adapt generation or apply answer selection after a predetermined generation schedule. We study within-instance allocation: under a hard per-instance prompt-plus-completion token cap, when should inference stop, generate another candidate, or spend residual tokens adjudicating candidates already observed? BOSS is a training-free policy for this three-way decision, with worst-case budget checks before every generation and judge call. Its key contribution is online generation-adjudication allocation under one shared token ledger. Across two Llama-3.1 models and four reasoning benchmarks, BOSS attains the highest accuracy in 22 of 24 model-task-budget cells under the common hard cap. At Llama-3.1-8B and B=4k, it reaches 60.5 macro-average accuracy versus 58.6 for Adaptive-Consistency, 59.1 for TALE-EP, and 58.9 for fixed-schedule League. On identical Stage-I candidate pools, randomized A/B judging with repeated voting improves plurality from 58.4 to 60.3, with the full BOSS selector reaching 60.5. Approximately matched-cost controls further characterize how the benefit of adjudication changes with available inference budget. Together, these results establish generation-adjudication allocation as a distinct design axis for reasoning under strict per-instance caps.",
    "published": "2026-10-19T13:34:47Z",
    "updated": "2026-10-19T13:34:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26383"
  },
  {
    "id": "2610.26369",
    "title": "Autonomous intelligence for mining productivity: a multi-agent AI approach to operational value creation",
    "authors": [
      "N Guerin",
      "A Dehoux",
      "M Nakhla"
    ],
    "abstract": "Integrated Remote Operation Centres (IROCs) are emerging as the architectural frontier of Industry 4.0 for capital-intensive sectors such as mining, oil and gas, and energy. Yet two intertwined gaps constrain their evolution towards full autonomy. First, no integrated agentic architecture has been proposed for mining IROCs that orchestrates Supervisory Control and Data Acquisition systems, digital twins, predictive analytics and human-machine interfaces under safety-critical constraints. Second, no evaluation framework jointly addresses the real-time, Health-Safety-Environment, regulatory-auditability and cost-per-decision requirements that govern industrial agentic deployments. This paper makes four contributions. It synthesises industry needs and quantified gains documented in analogous industries that motivate an agentic approach to mining IROCs. It introduces EI2ROC, a three-tier multi-agent architecture combining a Large Language Model orchestrator with specialised monitoring and production-capacityprediction agents communicating through a Model Context Protocol-style tool interface. It provides a critical review of agentic evaluation along six orthogonal dimensions and identifies the industrial blind spot of current benchmarks. Finally, it proposes a multi-dimensional benchmarking framework for industrial agentic AI comprising scenario library, harness, metrics and humancalibration protocol. The paper states explicitly which components are implemented in the current prototype, which belong to the proposed reference design and which remain future work, and reports preliminary cost and latency observations from an operating site. Together, EI2ROC and the benchmarking framework constitute a methodological blueprint transferable across CAPEX intensive industries.",
    "published": "2026-10-19T13:24:44Z",
    "updated": "2026-10-19T13:24:44Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.26369"
  },
  {
    "id": "2610.26365",
    "title": "From Tasks to Turns: Measuring Human Labor Contributions in Human-Agent Joint Production",
    "authors": [
      "Likai Wang",
      "Dezhao Su",
      "Jing Hu",
      "Yunyun Wan",
      "Jingdi Lei",
      "Xinhai Li"
    ],
    "abstract": "In agent workflows, a brief human instruction can alter subsequent search, reasoning, and tool execution, yet final task outcomes rarely reveal the contribution of an individual instruction to human-agent joint production. We propose a Human Turn-level framework for measuring human contributions, using task quality and token usage to characterize the collaborative production outcomes associated with each human instruction. We compare continuations from adjacent checkpoints under matched models, budgets, and termination conditions, and assess stability through repeated measurements. Across four archived and simulated interaction settings, we conduct 29,124 comparisons between predicted and observed directions of quality and computational change at both Human Turn and session levels. On HumanBench, we obtain 506 valid comparisons across 85 real-user scenarios. Results show that quality and computational changes associated with human guidance depend on task conditions. Expert-style and ordinary-style guidance differ in information provision, correction, and repetition. Even when task quality after continuation is identical, remaining computational demands can differ substantially across checkpoints. Our framework advances the measurement of human labor contributions from tasks and sessions to individual turns, providing a repeatable, fine-grained foundation for studying human contributions and their allocation in human-agent joint production.",
    "published": "2026-10-19T13:22:34Z",
    "updated": "2026-10-19T13:22:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.26365"
  },
  {
    "id": "2610.27018",
    "title": "Long-wave Infrared Polarimetric Remote Sensing Image Fusion for Vehicle Detection",
    "authors": [
      "Wenjuan Zhang",
      "Xiangrui Peng",
      "Zhen Li",
      "Caimeng Yi",
      "Xuesong Ma",
      "Jianwei Wang",
      "Jie Pan"
    ],
    "abstract": "Blurred vehicle contours and low contrast limit detection performance in infrared remote sensing imagery, while existing fusion methods may introduce polarization noise and fail to integrate complementary information effectively. To address these limitations, we propose a Mamba-based infrared polarimetric remote sensing image fusion model. Infrared polarization information reflects surface material properties and geometry, providing complementary information to infrared intensity. The proposed method first combines long-wave infrared total intensity S0 and the degree of linear polarization (DoLP), using a physics-inspired polarization-response proxy and spatial structural continuity to extract guidance features. It then employs bidirectional state space scanning along horizontal, vertical, and both diagonal orientations to enable cross-modal feature fusion across the entire image. Prior-guided multi-window structural similarity, reconstruction constraints, and a relative lower-bound loss for polarization saliency are jointly introduced to suppress noise while preserving global background structures and target polarization features. In addition, we construct AIR-LWIR-Pol, a dataset of 1,901 accurately registered image pairs acquired using an airborne division-of-aperture long-wave infrared polarimetric imaging system, and evaluate downstream vehicle detection using YOLO11. The experimental results show that the proposed method outperforms the comparison methods on four fusion metrics, including entropy and structural similarity. Vehicle detection mAP50 and mAP50-95 reach 55.0% and 29.4%. These results demonstrate the effectiveness of combining physical priors with state space modeling for long-wave infrared polarization image fusion and support its use for target detection in complex remote sensing scenes.",
    "published": "2026-10-19T13:22:25Z",
    "updated": "2026-10-19T13:22:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27018"
  },
  {
    "id": "2610.26362",
    "title": "GAIDA: Generative AI for Human-in-the-Loop Document Annotation",
    "authors": [
      "Islam Mesabah",
      "Ali Elhosary",
      "Priyabanta Sandulu",
      "Darko Obradovic",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Document annotation is a fundamental yet labor-intensive step in building document information extraction systems. While Optical Character Recognition (OCR) and Large Language Models (LLMs) can automate parts of this process, we argue that annotation systems should be judged not by how completely they remove human effort, but by how effectively they redirect it toward review and correction. We propose a modular human-in-the-loop architecture that integrates OCR-based extraction, LLM-based semantic pre-annotation, and human validation in a single editable workflow, and present \\textbf{GAIDA}, a research prototype serving as its reference implementation. GAIDA supports interchangeable OCR engines, LLM backends, and prompt configurations, and enables stage-specific measurement of annotation effort. In an initial single-annotator, stage-specific study on the FUNSD scanned-form and WildReceipt retail-receipt benchmarks, OCR assistance reduced region-creation and transcription time by up to \\textbf{80.9\\%}, and reviewing LLM pre-annotations reduced semantic-labeling time by up to \\textbf{73.7\\%}, despite imperfect pre-annotations of 78.86\\% and 86.98\\% Micro F1 on FUNSD and WildReceipt, respectively. Finally, we reuse the same implementation, adapting only OCR and prompt configuration, to build and openly release \\textbf{AraReceipt}, a manually annotated dataset of 100 Arabic receipt images labeled with 25 key-information classes. The results indicate that imperfect automated outputs provide practical value when presented as editable suggestions under human control.",
    "published": "2026-10-19T13:22:13Z",
    "updated": "2026-10-19T13:22:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26362"
  },
  {
    "id": "2610.26360",
    "title": "Remote Expert Evaluation of Tabletop Avatar Gaze Control in Asymmetric Multi-Scale MR--VR Collaboration",
    "authors": [
      "Carlos Mosquera",
      "Neven Elsayed",
      "Ernst Kruijff",
      "Joseph Newman",
      "Valeriya Lehrbaum",
      "Eduardo Veas"
    ],
    "abstract": "This paper proposes an integrated setup for a multi-scale asymmetric collaboration scenario in the context of a remote-expert use case, focusing on the expert side. In this system, the remote expert (with an exocentric view in Mixed Reality (MR)) uses a Tangible User Interface (TUI) to precisely position and rotate their avatar within a scaled tabletop World-in-Miniature (WIM). Inside the WIM, the expert's avatar and the operator share the same scale and egocentric view, while the expert retains a global tabletop overview of the plant to support collaboration. Interviews with industry experts during the participatory design phase revealed the need for an egocentric view inside the plant on the remote-expert side to enable full collaboration. We designed and studied three interaction-visualisation combinations to integrate and control the expert avatar's gaze: VR (fully immersive with direct head control), Head (floating screen with direct head control), and Touch (on-avatar screen with touchpad control). We evaluated these methods with 29 participants across two fault-detection tasks: Same Machine, where both collaborators inspect the same machine, and Twin Machine, where they inspect identical machines in separate locations. The VR condition, which combines immersion, direct head control, and a full-scale view, yielded the strongest overall performance and user experience, while the tabletop avatar setup was well received for collaboration. Our findings inform the design of gaze-control techniques for asymmetric MR-VR collaboration and reveal challenges and opportunities for future work.",
    "published": "2026-10-19T13:20:59Z",
    "updated": "2026-10-19T13:20:59Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.26360"
  },
  {
    "id": "2610.26357",
    "title": "HGASurv: Hierarchical Granularity-Aware Multimodal Integration for Survival Prediction",
    "authors": [
      "Peike Yu",
      "Wuchao Liu",
      "Jihong Guan",
      "Shuigeng Zhou"
    ],
    "abstract": "Multimodal survival prediction jointly analyzes histopathological whole-slide images (WSIs), genomic profiles, and clinical variables to stratify patients by risk. However, existing approaches often inadequately account for granularity differences across modalities, particularly in spatial organization and feature dimensionality. Within pathology, aggregating WSI patch features without preserving their spatial arrangement can obscure tissue architecture; across modalities, directly concatenating low-dimensional clinical variables with high-dimensional visual and genomic features may limit the contribution of clinical information to prediction. To address these challenges, we propose HGASurv, which introduces a hierarchical WSI encoding module and a clinical-guided graph propagation module for granularity-aware multimodal integration. The hierarchical WSI encoding module maps WSI patch features onto a spatial grid using their original coordinates and applies parallel convolutions to construct representations at patch, local-neighborhood, and regional scales. Genomic signature embeddings then query these scale-specific WSI representations through cross-modal co-attention, producing signature-conditioned morphological features. The clinical-guided graph propagation module uses clinical variables to define patient-similarity edges and propagates fused image-genomic node embeddings with graph attention, integrating clinical information through topology rather than feature concatenation. Across three TCGA cohorts, HGASurv achieved the strongest overall C-index performance, with ablation studies supporting the complementary contributions of the hierarchical WSI encoding and clinical-guided graph propagation modules. This design shows that matching representation and integration mechanisms to modality-specific granularity improves multimodal survival prediction.",
    "published": "2026-10-19T13:19:03Z",
    "updated": "2026-10-20T16:17:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26357"
  },
  {
    "id": "2610.26351",
    "title": "PhyPro-FM: A Physics and Prompt-Guided Graph Foundation Model for Contingency Analysis",
    "authors": [
      "Xu Yang",
      "Zhanyuan Sheng",
      "Chenhui Lin",
      "Haotian Liu",
      "Qi Wang",
      "Yue Yang",
      "Wenchuan Wu"
    ],
    "abstract": "The continuous evolution of next-generation power systems, characterized by the high penetration of renewable energy resources and dynamic topology variations, poses formidable challenges to traditional N-1/N-2 contingency analysis in terms of computational efficiency and scalability. While deep learning-based methods offer accelerated inference, existing studies predominantly treat contingency analysis as a pure regression problem, often overlooking the physical essence of grid operation and engineering requirements of real-world scenarios. To bridge this gap, this paper proposes a physics and prompt-guided graph foundation model (PhyPro-FM) for generalizable and engineering-viable contingency analysis. The proposed architecture integrates graph neural networks with a learnable global query mechanism and, notably, introduces a prompt-guided learning paradigm. By leveraging historical snapshots as few-shot prompts, the model dynamically captures correlations between target and historical operating conditions, significantly enhancing generalization capabilities under unseen topologies. Furthermore, we design a physics-informed training mechanism that prioritizes branch power flow errors over nodal voltage errors, aligning the optimization objective with critical grid security constraints. To ensure engineering applicability, a physics-informed inference mechanism is also developed, incorporating a residual-based correction module and a specialized post-processing strategy for singular branches to circumvent numerical instability. Comprehensive experiments demonstrate that PhyPro-FM outperforms state-of-the-art methods in accuracy and generalization, validating its superior physical consistency and robustness for practical engineering applications.",
    "published": "2026-10-19T13:16:43Z",
    "updated": "2026-10-19T13:16:43Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.26351"
  },
  {
    "id": "2610.26346",
    "title": "CARRS: A Constraint-Aware, Real-Time Routing System for Emergency Vehicles in Urban Environments",
    "authors": [
      "Vincent Sello",
      "Timothy Adeliyi",
      "Ridewaan Hanslo"
    ],
    "abstract": "Emergency vehicles such as police vehicles, fire engines, and ambulances require a stable and efficient route optimization to reach life-critical events in the shortest times possible. However, the dynamic nature of urban traffic makes this ideal scenario much more challenging, causing critical life-threatening delays. Traditional civilian navigation systems cannot account for real-time traffic changes alongside vehicle-specific constraints, creating inadequate routing scenarios. This research presents the Constraint-Aware Real-Time Routing System (CARRS), a unified software architecture tailored for emergency coordination. The CARRS architecture is engineered to fuse together classical pathfinding algorithms such as A*, Dijkstra, and Bidirectional A*, with Constraint Satisfaction Problem methodologies. The Design Science Research Methodology is the research framework, and prototyping is the iterative process. The artifact was empirically evaluated using OpenStreetMap data for major metropolitan road networks, combined with simulated dynamic traffic scenarios. Performance metrics focused on route optimality, constraint adherence, rerouting responsiveness, and the potential for future system scalability. Findings revealed the system's capability to generate optimal routes for operationally relevant subgraphs in under 35 seconds, with incremental rerouting responsiveness below 20 seconds. Furthermore, the system achieved more than 90% adherence to vehicle-specific constraints, making the CARRS architecture viable for real-time dynamic routing requirements. This study delivers a routing platform that bridges artificial intelligence-driven optimization with software engineering operational compliance, presenting a practical transformative step toward adaptive emergency vehicle coordination in dynamic urban environments.",
    "published": "2026-10-19T13:12:42Z",
    "updated": "2026-10-19T13:12:42Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26346"
  },
  {
    "id": "2610.26342",
    "title": "VibeTraining-Bench: Data-Trainer-Harness Co-Design for Iterative System Improvement",
    "authors": [
      "Ruotian Peng",
      "Yuanyi Ren",
      "Shuaiqi Liu",
      "Xin Guo",
      "Fang Zhu",
      "Yangyi Huang",
      "Yue Wu",
      "Zheng Wang",
      "Yandong Wen",
      "Zhihang Fu"
    ],
    "abstract": "Recursive self-improvement (RSI) requires agents to diagnose system bottlenecks and coordinate improvements across training and inference. We refer to the agents' capability to jointly optimize training data, the trainer, and the inference harness as cross-component co-design. We introduce VibeTraining-Bench, a benchmark for evaluating this capability across tasks spanning terminal operation, software engineering, multi-turn tool use, and mathematical reasoning. Within each task, research agents start from an identical initial agent system under a fixed resource budget. Guided by validation feedback, they iteratively refine data, trainers, and inference harnesses, then select and submit a final agent system for evaluation on the test set. To prevent reward hacking, we enforce three safeguards: test data isolation, separate research and grading containers, and network restrictions for research agents. Our evaluation results show that frontier research agents substantially improve target agent systems. For example, on SWE-bench Verified, GPT-6-Astra raises the target agent system's performance from 32.9% to 53.7%, comparable to the human-developed instruct model's 55.4%. However, there is still room to improve their ability to co-design and iteratively refine data, trainer, and harness to achieve cumulative performance gains. We hope that VibeTraining-Bench will serve as a unified platform for advancing RSI, deepening our understanding of cross-component optimization for agent systems. Code and data are available at https://github.com/D2I-ai/VibeTraining-Bench.",
    "published": "2026-10-19T13:10:54Z",
    "updated": "2026-10-20T13:03:07Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.26342"
  },
  {
    "id": "2610.26340",
    "title": "A Generic On-Board AI Processing Chain for Earth Observation: From Application Development to Embedded Deployment and Mission-Level Orchestration",
    "authors": [
      "Michel-Fran{\\c c}ois Foulon",
      "Liz Ramos Medina",
      "Thomas Goudemant",
      "Clotilde Szywala",
      "Virgile Robles",
      "Cl{é}ment Petitjean",
      "Ad{è}le Hankache",
      "Omar Hlimi"
    ],
    "abstract": "Earth observation satellites acquire more data than they can downlink. Extracting information on board with artificial intelligence (AI) turns the satellite into a data-reduction stage that downlinks compact products, such as masks or detections, instead of full scenes; deploying it in a mission, however, involves the whole processing chain and not only the neural network. We present a generic on-board AI processing chain along three axes, with wildfire segmentation as the worked example among ship detection and cloud segmentation. (i) The AI model is tuned (spectral-band selection, input normalization), quantized to 8-bit integers (int8) and ported to an AMD Versal VCK190, with its excellent segmentation performance preserved on the board. (ii) A modular tiler-inference-mosaicer workflow, reused unchanged across applications, brings the tile-level model to scene level, turning a full acquisition into a scene-level mask or detection list. (iii) Each step is packaged as a unikernel and orchestrated on board by ORCHIDE, a cloud-native orchestrator. The chain is characterized end to end, from the standalone execution on the target to its execution under orchestration with parallel workflows on a representative test bench. Beyond AI inference on individual tiles, this approach aims at increasing the maturity of on-board AI deployment by addressing a complete processing chain, from the acquired scene to the mission-level execution.",
    "published": "2026-10-19T13:08:45Z",
    "updated": "2026-10-19T13:08:45Z",
    "categories": [
      "cs.AI",
      "cs.AR",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2610.26340"
  },
  {
    "id": "2610.25340",
    "title": "Edge Deployable Lightweight Framework for Real-Time Driver Safety System with Integrated Lane Departure and Traffic Sign Recognition",
    "authors": [
      "Hassaan Ali Qureshi",
      "Danish Hussain",
      "Ali Hassan",
      "Aon Safdar",
      "Anas Bin Aqeel",
      "Muhammad Rafiq",
      "Zohaib Riaz",
      "Farhan Hussain"
    ],
    "abstract": "Lane departure and traffic-sign negligence are leading contributors to road accidents, particularly in regions with non-standardized signage and limited annotated data. Existing Advanced Driver Assistance Systems (ADAS) solutions are often developed as disjointed submodules, are rarely validated for real-time operation, and struggle to balance accuracy with low-latency inference for embedded deployment. We address these gaps with a unified, edge-deployable ADAS framework that simultaneously performs lane-departure warning (LDW) and traffic-sign detection and recognition (TSD/TSR), and validate the proposed system on automotive-class devices. Our framework combines a lightweight, lane-segmentation-driven LDW, which includes a drivable-area fallback for degraded markings, with a two-stage TSD/TSR pipeline consisting of efficient sign localization followed by fine-grained classification, designed to preserve accuracy at embedded latency. To support region-specific deployment under data scarcity, we curate a 35-class local traffic-sign dataset and introduce a generalized augmentation and balancing profile, expanding the corpus from 359 images to 8,750 samples. On an NVIDIA Jetson Orin Nano, the integrated system sustains 15 FPS end to end (32 FPS for LDW and 18 FPS for TSD/TSR). The TSD/TSR branch achieves 97.4 mAP for detection and 95.6% validation accuracy (93.1% on a local real-world set) while maintaining an approximately 13.9 M parameter footprint. Relative to recent methods that target a single task or report results only on desktop-class GPUs, our approach delivers both LDW and TSD/TSR with real-time performance on edge hardware, providing a practical pathway to low-cost, field-ready ADAS in resource-constrained settings.",
    "published": "2026-10-18T15:34:08Z",
    "updated": "2026-10-18T15:34:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25340"
  },
  {
    "id": "2610.25333",
    "title": "CoRe-WM: Conditioned Response-State World Modeling for Longitudinal Treatment-Response Prediction in Breast DCE-MRI",
    "authors": [
      "Lin Zhao",
      "Bowen Chen",
      "Qiaohui Gao",
      "Shaowen Wan",
      "Xiang Li",
      "Wei Liu",
      "Tianming Liu"
    ],
    "abstract": "Pathologic complete response (pCR) after neoadjuvant chemotherapy is a key prognostic indicator in aggressive breast cancer, yet existing prediction approaches either rely on pretreatment imaging alone, missing the patient's evolving response, or optimize multi-visit classifiers under direct outcome supervision, coupling representation learning with the clinical endpoint. We formulate longitudinal pCR prediction as a world-modeling problem and propose Conditioned Response-state World Modeling (CoRe-WM), which learns a latent state-transition model that predicts the next imaging state from the observed sequence. The transition function is conditioned on patient clinical profile and assigned therapy through additive shift and feature-wise modulation, enabling patient- and treatment-specific dynamics. A Factorized Response State pathway further decouples treatment-response dynamics from imaging appearance by encoding the structural prior that response manifests primarily in lesion morphology. After pretraining, all parameters are frozen and a linear readout predicts pCR at each clinical decision point. We evaluate CoRe-WM on I-SPY2 under five-fold cross-validation and assess cross-cohort transfer on I-SPY1. CoRe-WM achieves the highest discrimination among all evaluated methods at every prospective decision point, and demonstrates robust cross-cohort transfer. Ablation studies identify patient-profile conditioning and the factorized response pathway as the principal contributors. These results establish world-model-based representation learning as a promising framework for outcome prediction in oncology and beyond.",
    "published": "2026-10-18T15:25:09Z",
    "updated": "2026-10-18T15:25:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25333"
  },
  {
    "id": "2610.25326",
    "title": "MPIG: Multi-angle Polarization Image Generation from a Single Polarization Observation",
    "authors": [
      "Jue Wang",
      "Ruilin Huang",
      "Liquan Shen",
      "Zhen Tian",
      "Xia Hua"
    ],
    "abstract": "Polarization imaging provides informative cues for material analysis, scene understanding, and visual perception. However, acquiring complete polarization observations typically requires specialized hardware and multi-angle measurements, thereby increasing system complexity and limiting practical deployment. In this work, we address the problem of predicting the missing $45^\\circ$, $90^\\circ$, and $135^\\circ$ polarization views from a single $0^\\circ$ observation by leveraging a learned scene prior. To this end, we propose MPIG (Multi-angle Polarization Image Generation), a Swin Transformer-based framework that couples cross-angle feature interaction with residual decoding to predict angle-dependent intensity variations while preserving shared scene structure. Specifically, measured Stokes differences and polarization-strength-aware supervision guide the recovery of polarization modulation, orientation, and magnitude, while low-rank factorization further reduces the decoding cost. We also construct HighPol, a large-scale real-world polarization dataset comprising 5,474 groups of high-resolution four-angle polarization images collected from diverse indoor and outdoor scenes. Experimental results demonstrate improved image and polarization accuracy, achieving 29.729 dB PSNR, 0.9505 SSIM, and $21.514^\\circ$ AoLP MAngE while requiring 85.86 M parameters and 1.126 T FLOPs. Furthermore, downstream validation on glass and semantic-segmentation tasks suggests that the generated polarization images can preserve task-relevant information, demonstrating the effectiveness of MPIG and the practical utility of predicted polarization observations for downstream vision applications.",
    "published": "2026-10-18T15:13:23Z",
    "updated": "2026-10-18T15:13:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25326"
  },
  {
    "id": "2610.25323",
    "title": "Where and Why Search-Augmented LLMs Fail When Reasoning over Rapidly Evolving Knowledge",
    "authors": [
      "Tianyi Hu",
      "Bhavyajeet Singh",
      "Niket Tandon",
      "Akhil Arora"
    ],
    "abstract": "As the world changes, new information is published while older records remain online. This complicates reasoning for large language models (LLMs), which must retrieve evidence and resolve conflicts to determine which information remains valid. Existing evaluations treat information seeking as a black box, revealing little about where and why LLMs fail. To address this gap, we introduce TREK, a suite of three components: TREKTRACE is a plug-and-play framework that attributes failures to specific stages of retrieval and reasoning. We apply it to TREKBENCH-WILD, a meta-benchmark of real-world questions that require complex reasoning over rapidly evolving knowledge. Surprisingly, the main bottleneck is post-retrieval reasoning rather than retrieval: frontier models are often misled by conflicting evidence even after retrieving all the information needed to answer. To study this bottleneck, we build TREKBENCH-CTRL, a controlled benchmark with distractors spanning temporality, relevance, and trustworthiness, and show that benchmarks dominated by outdated distractors substantially underestimate task difficulty. Together, TREK provides a testbed for diagnosing and improving reasoning over rapidly evolving knowledge.",
    "published": "2026-10-18T15:09:08Z",
    "updated": "2026-10-18T15:09:08Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25323"
  },
  {
    "id": "2610.25318",
    "title": "AdaFedXplain: Adaptive Federated Learning with Explainable AI for Ransomware Detection",
    "authors": [
      "Md. Emran Biswas",
      "Md. Delowar Hossain",
      "Mst. Tanbin Yasmin Tanny",
      "Muhammad Aminur Rahaman",
      "Md Al Amin",
      "Tangina Sultana"
    ],
    "abstract": "Attacks using ransomware have developed into complex multiphase campaigns that target vital infrastructure, resulting in annual damages of billions of dollars. Conventional detection techniques are ineffective against zero-day variations, and privacy issues are raised by centralized machine learning algorithms. Federated learning allows for cooperative model training without data sharing, however current FL approaches suffer from explainability issues, high communication cost, and non-IID data heterogeneity. In this study, we present AdaFedXplain, an explainable AI-based adaptive federated learning system for ransomware detection. Our approach includes progressive XGBoost complexity to avoid overfitting, a decaying learning rate schedule for stable convergence, and dynamic client grading based on ransomware prevalence and data sufficiency. Using 62,485 real-world ransomware samples from four OS-based non-IID clients, we compare AdaFedXplain against FedAvg, FedProx, and SCAFFOLD. According to experimental data, AdaFedXplain outperforms all baselines with 99.59% detection accuracy and 99.64% F1-score while cutting energy usage by 75%, latency by 65%, and communication overhead by 75%. The ablation investigation demonstrates that every element enhances performance. Security analysts can use SHAP explainability to identify important PE header characteristics that influence detection decisions. Our system provides a collaborative ransomware detection solution that is efficient and interpretable, while reducing privacy risks through federated learnings data-local training paradigm.",
    "published": "2026-10-18T14:55:23Z",
    "updated": "2026-10-18T14:55:23Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25318"
  },
  {
    "id": "2610.25309",
    "title": "SENRI: Understanding the Space-Event Nexus in Real-Life Videos",
    "authors": [
      "Kehan Lan",
      "Kaining Ying",
      "Henghui Ding",
      "Kaipeng Zhang"
    ],
    "abstract": "Human memories are organized in a way that connects events with their corresponding spatial contexts. An AI assistant should also be able to memorize and recall the nexus of events and spaces. Thus we introduce SENRI, a task that studies this space--event connection in long, continuous real-life egocentric video. It contains six task types in two directions: Event$\\rightarrow$Space, which recovers spatial knowledge from event cues, and Space$\\rightarrow$Event, which retrieves events from regions and trajectories. To evaluate this, we build SENRI-Bench, containing 500 manually annotated multiple-choice questions over 10 uninterrupted self-recorded videos with around 25.3 hours of content. Also, we evaluate three typical long video understanding paradigms: direct perception, evidence seeking, and persistent memory. The task remains challenging across all three paradigms, highlighting substantial room for improvement. Then we show two representative failure modes of existing memory methods and address these evidence gaps with SENRI-Agent, a controller that uses Target-Guided Visual Check (TGVC) to propose local visual check tasks for parallel verifiers and integrate the reports into a working memory to help with reasoning. Built upon existing memory systems, SENRI-Agent improves the performance of existing baselines without modifying their stored memories. We hope SENRI will provide valuable insights into how real-life egocentric understanding should be evaluated, reveal the gaps in existing approaches, and offer a possible direction for improvement.",
    "published": "2026-10-18T14:41:41Z",
    "updated": "2026-10-18T14:41:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25309"
  },
  {
    "id": "2610.25301",
    "title": "Shared-Private Cross-Modal Discrepancy Learning for Imbalanced Multi-Source Audio-Visual Deepfake Detection",
    "authors": [
      "Qiwu Wen",
      "Jahangir Alam"
    ],
    "abstract": "Audio-visual deepfake detectors are often trained under a single dataset or manipulation regime, but multi-source training collections may contain heterogeneous attacks and uneven source distributions. Training separate detectors for each source is inefficient, while a single shared detector may be biased toward dominant source-specific patterns. We study known-source imbalanced multi-source audio-visual deepfake detection using FakeAVCeleb and LAV-DF, where source identity is supplied during training and inference. To address this setting, we build on the Multi-Scale Cross-Modal Transformer Encoder (MSCT) and propose Pre-MSCT Shared-Private Feature Fusion. Our method routes \\texttt{[CLS]}-augmented audio and visual tokens into a shared stream and source-specific private streams before the first MSCT block, while retaining its internal multi-scale self-attention (MSSA), differential cross-modal attention (DCA), and feed-forward operations. The shared stream models cross-source reusable evidence, while the private streams retain source-dependent residual variations. A domain-aware gated residual fusion module injects selected private evidence into the shared representation for the main fused prediction. Experiments under two controlled source-composition protocols show improved macro and worst-source AUC compared with the MRDF and MSCT baselines. These results support shared-private cross-modal discrepancy learning in the evaluated two-source setting with known source identity.",
    "published": "2026-10-18T14:34:38Z",
    "updated": "2026-10-18T14:34:38Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.25301"
  },
  {
    "id": "2610.25300",
    "title": "Learning When to Abort in Transformer Planning: A Mechanistic Study",
    "authors": [
      "Shi Feng",
      "Qimin Zhong",
      "Siwei Wang",
      "Yifei Shen",
      "Shang-Hua Teng",
      "Hao Liao",
      "Wei Chen"
    ],
    "abstract": "Planning does not by itself imply the ability to recognise errors, but recognising errors can improve planning capacity. In this paper, we study this phenomenon in Transformer planning. To analyze the inner mechanism, we follow the approach of Wang et al. (2024) and abstract planning as path-finding in graphs. In this setting, we train the model to detect the error of invalid transitions, i.e., after the model generates a next node that is not adjacent with the current node, the model should then generate a special abort token x. For expressiveness, we construct a Transformer with feed-forward width $O(|V|)$ for any fixed graph with node set $V$. It can detect all possible invalid transitions, and select a valid next node if the prefix is valid. We then propose a worst-case lower bound on feed-forward width, which makes the detector's linear width near-optimal up to logarithmic factors. In trained models, we demonstrate that invalid-transition detection increases previous-node attention, and most of the valid--invalid separation locates in the feed-forward network's output. This accords with our theoretical insights. Finally, we use this error detection to improve the model's performance: at inference, generating the abort token x will directly cause an external procedure to discard the attempt and restart from the original prompt. Experiments show that error detection combined with retry improves model's planning reliability on graphs, Countdown, and mazes.",
    "published": "2026-10-18T14:33:08Z",
    "updated": "2026-10-18T14:33:08Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.25300"
  },
  {
    "id": "2610.25298",
    "title": "Aligning Language Models with Indigenous Community Cosmovision through Constitutional AI",
    "authors": [
      "Silvia Fernández-Sabido",
      "Jorge Reyes-Magaña",
      "Jesús Adrián Chay Tun",
      "Jean Carlos Buenfil",
      "Victor González Nahuat",
      "Francisco Morales"
    ],
    "abstract": "Large language models (LLMs) are predominantly trained on corpora that reflect Western, anglophone worldviews. This asymmetry is not neutral: when a model answers questions about territory, community authority, or the relationship with nature, it does so from assumptions that may be alien to the communities using the system. This paper presents a system for aligning language models with the ethical principles of Indigenous communities in Latin America. Drawing on interviews with five Indigenous leaders and defenders, we built an operational cultural constitution grounded in an Indigenous cosmovision, with 12 principles. On this basis, we implemented a Constitutional AI (CAI) pipeline in two phases: supervised fine-tuning (SFT) and direct preference optimization (DPO). The base models were Qwen2.5-7B-Instruct and Qwen2.5-1.5B-Instruct. With only 24 preference pairs, improvements were modest but detectable in intergenerational transmission, linguistic caution, and consultation and consent. Qualitative analysis reveals that the SFT phase was responsible for the primary shift in alignment, while DPO refined specific categories. The system was deployed in a conversational interface with retrieval-augmented generation (RAG) that allows communities to feed the knowledge base, turning alignment into a participatory cycle. We argue the architecture is functional and will scale qualitatively once the corpus is expanded and computing constraints are resolved. The work constitutes a first iteration of an epistemic justice mechanism for value alignment in the Global South.",
    "published": "2026-10-18T14:31:59Z",
    "updated": "2026-10-18T14:31:59Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.25298"
  },
  {
    "id": "2610.25296",
    "title": "World Model Interpretability: From Decoding Representations to Understanding Latent Worlds",
    "authors": [
      "Jize Wang",
      "Yongcheng Jing",
      "Xinyi Le",
      "Cailian Chen",
      "Xinping Guan",
      "Dacheng Tao"
    ],
    "abstract": "Emerging Joint-Embedding Predictive Architectures (JEPAs) are moving beyond representation learning towards latent world models that support prediction, planning, and control. Yet their latent worlds naturally lack a human-interpretable interface. In this Perspective, we argue that as JEPA latents become internal states for prediction and action, interpretability must move beyond what they encode to how latent variables interact, evolve, and causally drive prediction. To this end, we envision a four-stage research agenda, involving Ground, Structure, Verify, and Act, to guide this shift toward actionable latent-world understanding. Within our framework, existing JEPA interpretability efforts provide early evidence for Ground, while systematic analysis of latent structure, causal verification, and intervention remains largely unexplored. Overall, this Perspective aims to call for a broader latent-world interpretability agenda that shifts attention from decoding representations toward understanding, validating, and acting on latent worlds.",
    "published": "2026-10-18T14:29:13Z",
    "updated": "2026-10-18T14:29:13Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25296"
  },
  {
    "id": "2610.25290",
    "title": "MotionShift: Environment-Compatible Motion Transfer via Planner-Evaluator Synergistic Adaptation",
    "authors": [
      "Yanchen Liu",
      "Junyao Gao",
      "Yanan Sun",
      "Wensheng Chen",
      "Guangming Lu",
      "Wenjie Pei"
    ],
    "abstract": "Existing motion transfer methods excel at exact, rigid motion replication from reference videos to target scenes, whereas they often fail to account for the compatibility between the transferred motion and the target scene environment in accordance with physical laws. In this work, we propose MotionShift, a novel motion transfer framework that achieves high-fidelity motion transfer while ensuring physical compatibility with the target scene. In particular, we design a planner--evaluator iterative motion adaptation mechanism, in which a Large Language Model (LLM) acts as the planner to generate motion trajectories by leveraging its strong semantic reasoning capabilities, while a Vision-Language Model (VLM) serves as the evaluator to rectify the motion based on its superior visual perception and scene understanding. Through this planner--evaluator synergistic reasoning process, the motion is adapted to the target scene in a training-free manner. The adapted motion is then used as a generative condition for an image-to-video (I2V) model to render videos in the target scene. Extensive experiments demonstrate that MotionShift achieves high-fidelity and physically compatible motion transfer across diverse and complex scenes. Moreover, we show that MotionShift can be readily integrated into existing trajectory-conditioned I2V models, endowing them with realistic motion transfer capabilities.",
    "published": "2026-10-18T14:11:39Z",
    "updated": "2026-10-18T14:11:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25290"
  },
  {
    "id": "2610.25289",
    "title": "The Explainability Illusion: Must ViTs Exhibit Patch-Decoding Interpretability?",
    "authors": [
      "Ronen Schaffer",
      "Hila Manor",
      "Tomer Michaeli"
    ],
    "abstract": "Transformers are widely assumed to exhibit token-decoding explainability. In particular, in vision transformer (ViT) classifiers, decoding individual patch tokens has become a common diagnostic tool due to its tendency to yield human-interpretable outputs. In light of the increasing popularity of this approach, an important question is whether token-decoding explainability is an inherent property of transformers that should be expected to hold across architectures, scales, and training objectives, or merely an artifact of some implicit bias. In this paper we systematically study token-decoding explainability across diverse ViT settings, spanning architectures, scales, and training objectives, using both controlled experiments and real-world models. We find that while some models indeed exhibit aligned and interpretable token decodings, others exhibit either inverted explainability maps or a complete lack of correlation with the image semantics. As we show, these tendencies toward different explainability behaviors are not intrinsic to the architecture and can vary arbitrarily with changes in the optimization landscape. We provide theoretical support for these observations by demonstrating a setting where a single fixed toy transformer architecture can provably implement the optimal classification rule in multiple ways, which differ in their patch-decoding explainability patterns. Our results show that token-decoding explainability is not an inherent property of trained transformers, but rather an outcome contingent on the problem setting and thus should not be a-priori assumed to hold. Code can be found in https://ronensc.github.io/Explainability-Illusion/ .",
    "published": "2026-10-18T14:10:50Z",
    "updated": "2026-10-18T14:10:50Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25289"
  },
  {
    "id": "2610.24414",
    "title": "S3D-Mosaic: Subgradient-Guided Cross-Band Structure Transfer for Spectral Demosaicing",
    "authors": [
      "Weiqiang Zhao",
      "Xian Li",
      "Yuzhe Gui",
      "Tianzhu Liu",
      "Yanfeng Gu"
    ],
    "abstract": "Multispectral filter array (MSFA) imaging enables snapshot spectral acquisition, but its per-band sparse sampling causes severe spatial aliasing. Although missing spatial structures can be inferred across bands, wavelength-dependent contrast variations make direct cross-band transfer unreliable. Existing model-based methods lack explicit magnitude-invariant mechanisms, and learning-based methods require layout-specific training or per-image tuning, limiting generalization. To address these issues, we propose S3D-Mosaic, a model-based spectral demosaicing method built upon a subgradient-guided cross-band structure transfer framework. We first establish a subgradient-guided regularization framework with a generalized cosine-similarity interpretation, providing a convex mechanism for magnitude-invariant information transfer. Then we design a compact Directional Sparse Equivariant Difference Convolution (DSE-DConv) for band-level extraction of orientation-selective, high-frequency structure features at low computational cost. Instantiating the framework with DSE-DConv on spectrally adjacent bands yields a cross-band self-structure similarity regularizer for spectral demosaicing, which we optimize via a dual-scan ADMM algorithm that decouples the bidirectional dependency while propagating magnitude-robust structural information across bands. With DSE-DConv's two parameters trained once via self-supervision, S3D-Mosaic outperforms state-of-the-art unsupervised methods on CAVE and NTIRE 2022, and generalizes robustly to varying MSFA layouts, pan-mosaic fusion, and real-world UAV data with fixed reconstruction hyperparameters. The source code is available at \\url{https://github.com/bestwishes43/S3D-Mosaic}.",
    "published": "2026-10-17T03:29:24Z",
    "updated": "2026-10-17T03:29:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24414"
  },
  {
    "id": "2610.24409",
    "title": "Long Listening Thoughts: Eliciting Open Auditory Reasoning with Deliberative Perception and Cognitive Refinement",
    "authors": [
      "Jaeyeon Kim",
      "Chao-Han Huck Yang",
      "Luoyi Zhang",
      "Chan-Jan Hsu",
      "Fernando Ruiloba Portilla",
      "Jinchuan Tian",
      "Shinji Watanabe",
      "Carlos Busso"
    ],
    "abstract": "We introduce Long Listening Thoughts (LLT), a framework for constructing post-training datasets that improves audio reasoning by pairing deliberate perceptual grounding with explicit cognitive behaviors. On audio understanding and reasoning benchmarks, large audio-language models (LALMs) are limited primarily by perceptual errors, yet existing post-training datasets rely on audio descriptions of limited diversity. Through a four-stage pipeline, LLT (1) builds multi-aspect dense audio descriptions spanning semantic, acoustic, and temporal information, (2) generates more challenging questions, (3) synthesizes incorrect reasoning traces, and (4) extends short reasoning traces into long ones via a thought-continuation strategy that elicits cognitive behaviors such as verification and backtracking. Using LLT, we synthesize 1.6M reasoning traces and train Qwen2.5-Omni-7B with a two-stage pipeline of supervised fine-tuning (SFT) followed by direct preference optimization (DPO). This improves accuracy on MMAU Test-mini (71.5 to 78.2), MMAR (56.7 to 63.7), and MMSU (60.6 to 66.0).",
    "published": "2026-10-17T03:20:36Z",
    "updated": "2026-10-17T03:20:36Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.24409"
  },
  {
    "id": "2610.24405",
    "title": "ZeroDSS: Semantic Segmentation from Class Names Alone",
    "authors": [
      "Tian Ming",
      "Marzi Heidari",
      "Yuhong Guo"
    ],
    "abstract": "Semantic segmentation depends heavily on real images with pixel-level annotations, making dense supervision a major obstacle to deployment in new domains. We study task-specific data-free semantic segmentation, where training uses generic pretrained generative priors but has access to no target-domain images, masks, or captions--only a predefined category set. We introduce Zero-Data Semantic Segmentation (ZeroDSS), a feedback-driven approach that treats synthetic supervision as an adaptively controllable training distribution rather than a direct surrogate for real data. ZeroDSS constructs a semantically structured prompt distribution through LLM-guided compositional generation and adaptive class rebalancing, then converts the prompts into image-mask pairs using diffusion attention. Its feedback-driven distribution refinement consists of a two-phase closed-loop training procedure with a single loop-back step. In Phase I, a segmenter is trained using confidence-weighted supervision and dual-scale consistency. In Phase II, model feedback is used to adaptively target underperforming categories and refine diffusion-derived masks using model predictions. After this refined initial training, a teacher-student framework is utilized in the final phase to iteratively improve the fused supervision and segmenter through exponential moving average (EMA) updates. Using synthetic training data only, ZeroDSS achieves 35.0% mIoU on MS COCO with DeepLabV3, and 66.3% and 63.5% mIoU on PASCAL VOC with DeepLabV3 and Mask2Former, respectively. These results show that explicitly constructing and iteratively refining the synthetic supervision distribution can substantially reduce the synthetic-to-real gap in dense prediction.",
    "published": "2026-10-17T03:14:33Z",
    "updated": "2026-10-17T03:14:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24405"
  },
  {
    "id": "2610.24400",
    "title": "Spatons: Spatiotonally Localized Building Blocks for Efficient XR Predistortion",
    "authors": [
      "Mohammadjavad Maheronnaghsh",
      "Sushant Kondguli",
      "Steve Mann",
      "Andreas Moshovos"
    ],
    "abstract": "We present Spatons, a family of compositional, spatially localized neural operators for computationally efficient XR (extended reality) predistortion and distortion compensation. XR displays (AR, VR, and MR) suffer from spatial (e.g., geometric) and tonal (e.g., colour) distortions. Frames can be pre-distorted so that the projected image looks as intended. Distortions vary with manufacturing tolerances and projection systems, motivating programmable compensation. Untethered, battery-operated XR systems also require low energy and latency. A Spaton is a hybrid patch-to-pixel block combining tiny Multi-Layer Perceptrons (MLPs) with fixed-function interpolation. Using Spatons, we build programmable, computationally efficient pipelines for varied distortion scenarios. On the full spatiotonal Scenario 5, Sequential-5' matches CompenNet++ in SSIM (0.944 vs. 0.944) and closely matches its PSNR (27.5 vs. 27.7 dB), with substantially lower complexity. We demonstrate a flexible Spaton solution with 6 times fewer FLOPs and 106 times fewer parameters than CompenNet++, and 4-10 times fewer memory transfers than UNet++. We characterize software implementations and analytical hardware estimates, including optimizations across target XR platforms. The distortions considered are drawn mostly from see-through, near-eye displays, where the spatial light path governs local intensity and spectral response. This early systems-level exploration uses closed-form differentiable distortions and one real projector-camera capture set for training and evaluation, rather than through-the-optics measurements. Testing on a wider range of real XR devices remains future work. Chromatic dispersion (color fringes) remains the main artifact where Spatons trail monolithic baselines.",
    "published": "2026-10-17T03:11:05Z",
    "updated": "2026-10-17T03:11:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24400"
  },
  {
    "id": "2610.24395",
    "title": "MSCR: Jointly Balancing Utilization Across Modalities and Discovering Synergistic Information",
    "authors": [
      "Xinyu Chen",
      "Liangjian Wen",
      "Jiang Duan",
      "Dongkai Wang",
      "Yong Dai",
      "Jiayu Bai",
      "Jianzhuang Liu",
      "Zhen Tian",
      "Guoping Qiu",
      "Zhao Kan"
    ],
    "abstract": "In multimodal learning, modality imbalance often lets one modality dominate optimization and keeps the model from fully exploiting cross-modal interactions. Balance-oriented methods such as the Multimodal Competition Regularizer (MCR) perform well by alleviating this imbalance during training. These dynamic balancing methods, however, mainly adjust modality contributions and do not consider how imbalance affects the formation of synergistic information during fusion. Synergy is a major source of multimodal advantage, because it is predictive gain that cannot be recovered from unimodal evidence alone. We propose the Multimodal Synergistic Competition Regularizer (MSCR), a fusion method that jointly promotes balanced modality utilization and the discovery of synergistic information. MSCR has two complementary objectives. An anti-dominance objective suppresses excessive unimodal influence and leaves room for synergistic information, and a synergy objective encourages the fused predictor to outperform a non-synergistic unimodal reference. An adaptive gate further concentrates the regularization on samples that need stronger collaborative modeling. Experiments on five benchmarks show that MSCR consistently improves performance over MCR and strengthens synergistic capability. It raises conditional recovery, the accuracy of the fused prediction on samples that the unimodal predictors misclassify, as well as the share of the model's output that InterSHAP attributes to cross-modal interactions. Its gain in conditional recovery persists when the fusion module is Transformer-based. Code is available at https://github.com/chenxinyu991-collab/MSCR.",
    "published": "2026-10-17T02:54:30Z",
    "updated": "2026-10-17T02:54:30Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24395"
  },
  {
    "id": "2610.24390",
    "title": "Trust the Edge, Doubt the Arrow: Auditing Validation Signals for Text-Mined Clinical Causal Knowledge Graphs",
    "authors": [
      "Su Lan",
      "Shicheng Zhou",
      "Yiqi Wang",
      "Yanming Zhu",
      "Xuefei Yin",
      "Alan Wee-Chung Liew"
    ],
    "abstract": "Clinical causal retrieval-augmented generation systems increasingly use knowledge graphs (KGs) mined from notes, yet extracted assertions remain candidates that require audit for patient-level EHR support and direction. We construct a directed candidate graph from 328,839 MIMIC-IV discharge summaries using LLM extraction and UMLS normalization, and evaluate three signals against SemMedDB: within-admission co-occurrence lift, cross-admission diagnosis-coding temporal precedence, and literature corroboration. Lift filters unsupported co-mentions and provides useful EHR support, but not causal proof. Coding order is a weak direction signal: among the 686 candidates where it commits, it reaches 54.2% agreement with SemMedDB, below the extractor's 69.4% on the same subset. Literature corroboration supplies independent direction evidence but covers only 30.4% of candidate relations. A MIMIC-III replication yields the same pattern: extractor direction remains stable (70.5%), whereas coding-order direction is near chance (50.9%). Thus, text-mined clinical causal candidate KGs are best treated as EHR-supported but direction-uncertain. In a leakage-controlled causal QA benchmark, lift-only retrieval achieves 35.7% accuracy; conservative causal demotion achieves 37.2% while reducing evidence-unsupported answers from 17.3% to 6.1% at fixed retrieval recall. We release code, aggregate summaries, and scripts to regenerate restricted outputs.",
    "published": "2026-10-17T02:46:57Z",
    "updated": "2026-10-17T02:46:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24390"
  },
  {
    "id": "2610.24389",
    "title": "From Neglect to Resignation: Understanding the Evolution of Mobile Privacy",
    "authors": [
      "Yibo Meng",
      "Ziqi Liu",
      "Lionel Z. Wang",
      "Shuning Zhang",
      "Xiaolan Ding"
    ],
    "abstract": "This decade-long longitudinal qualitative study follows 31 smartphone users in China across four interview waves (2014-2023) to examine how mobile privacy understanding evolves alongside shifting computing infrastructures. Findings reveal three stages shaped by distinct interactional mechanisms: early functional acceptance of permission-based data access, growing vigilance triggered by behavioral tracking feedback loops, and eventual resignation as AI-driven inference made ecosystem-level profiling feel inescapable. Rather than a stable attitude, digital resignation emerges through cumulative infrastructure exposure, as each new system layer retroactively reinterpreted earlier permissions and exhausted users' capacity for self-management. The study challenges permission-centric design assumptions and proposes inference visibility, context isolation, and automated privacy agency as system-level responses.",
    "published": "2026-10-17T02:44:39Z",
    "updated": "2026-10-17T02:44:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.24389"
  },
  {
    "id": "2610.24385",
    "title": "Bridging Exploration and Persona: Information-Directed Dueling for Test-Time Agent Personalization",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Xiangyi Wang",
      "Hengquan Huang",
      "Shuang Qiu",
      "Min Zhang",
      "Zhongxiang Dai"
    ],
    "abstract": "Effective test-time personalization requires LLM agents to adapt to query-dependent user preferences from lightweight interaction. We study persona selection with binary comparisons between candidate responses as the online signal. We present ID-TAP, a scalable, IDS-inspired neural dueling-bandit framework for large discrete persona spaces. ID-TAP combines a query-conditioned neural utility model with a lightweight Bradley-Terry explorer, and transfers comparison evidence across related queries through similarity-weighted warm starts. The neural model shares statistical strength across queries while preserving query-specific scores, and efficient BT updates score hypothetical challengers. Across seven user-conditioned generation benchmarks under reference- and model-based preference simulators, ID-TAP achieves the strongest aggregate performance among the evaluated baselines within a fixed ten-round comparison budget. These results support information-directed challenger selection as an effective design for test-time persona adaptation.",
    "published": "2026-10-17T02:40:47Z",
    "updated": "2026-10-17T02:40:47Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.24385"
  },
  {
    "id": "2610.24383",
    "title": "IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Zikun Qu",
      "Jiahang Sun",
      "Xiangyi Wang",
      "Zhiwei Shang",
      "Zhiyong Wang",
      "Guojun Xiong",
      "Zhongxiang Dai"
    ],
    "abstract": "Improving every agent in an LLM-based multi-agent system can be prohibitively costly, making it important to identify which agent should be prioritized to achieve the greatest system-level gain with limited resources. Failure attribution can inform this decision, but an agent's responsibility for failures does not directly reveal the system-level gains achievable by improving it. We therefore introduce IF-MAP, an influence-function-inspired method for identifying agents with high potential for system-level improvement. For each agent, IF-MAP measures end-to-end loss changes under controlled semantic prompt perturbations, fits a regularized local response model in a low-dimensional prompt-embedding subspace, and uses the estimated response norm as a priority score. This black-box procedure requires no access to model parameters or gradients and produces agent priorities that can guide subsequent improvement effort. We evaluate IF-MAP across six multi-agent workflows spanning code generation, question answering, and mathematical reasoning, using the same priorities for prompt optimization and model upgrades. Optimizing the selected agents' prompts achieves a macro-average gain of 3.81 percentage points, compared with 1.85 for uniform agent selection. Across five target models, upgrading the selected agents yields macro-average gains of 7.62-16.42 percentage points, compared with 3.81-8.62 for uniform agent selection. Despite its probing overhead, IF-MAP reduces Qwen3-8B and DeepSeek-V3.2 token use by 74.2% and 35.2%, respectively, relative to optimizing every agent, and reduces target-model tokens by 63.6-64.9% relative to upgrading every agent. These results support the use of IF-MAP to identify promising agents and direct improvement effort toward greater end-to-end performance gains.",
    "published": "2026-10-17T02:36:35Z",
    "updated": "2026-10-17T02:36:35Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.24383"
  },
  {
    "id": "2610.24382",
    "title": "Is This Your Agent? Identity Watermarking for Agent Systems in Dynamic Environments",
    "authors": [
      "Yuwei Zhong",
      "Yu Cheng",
      "Jiuan Zhou",
      "Weizhi Liu",
      "Yi Xie",
      "Yongkang Hu",
      "Yuan Xie",
      "Zhaoxia Yin"
    ],
    "abstract": "Agent systems deployed in dynamic environments continuously update their memories, skills, and runtime configurations, leading to evolving trajectories and challenges for persistent identity authentication. Existing text and agent watermarking methods struggle to achieve stable watermark embedding under dynamic environments, while embedded watermarks may become difficult to recover due to environmental changes. This paper proposes DASMark, an identity watermarking framework for dynamic agent systems. DASMark introduces Action-Preserving Embedding (APE), which learns semantically similar but distinguishable decision-expression channels from diverse interaction trajectories to enable stable watermark embedding in dynamic systems. It further introduces Shift-Robust Recovery (SRR) to mitigate context-induced shifts and improve watermark recovery stability under dynamic environments. In dynamic settings, DASMark achieves 98.5% bit-decoding accuracy and maintains 95.2% accuracy under attack scenarios, while preserving task utility comparable to unwatermarked agents.",
    "published": "2026-10-17T02:27:55Z",
    "updated": "2026-10-17T02:27:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24382"
  },
  {
    "id": "2610.24381",
    "title": "Learning from the Right Regions: Class-Conditioned Explanation Guidance for Medical Imaging",
    "authors": [
      "Zubair Faruqui",
      "Rahul Dubey"
    ],
    "abstract": "Deep neural networks can achieve strong predictive performance in medical imaging while relying on regions unrelated to the predicted finding. Explanation-guided learning can address this problem, but multi-label classification introduces a key challenge: multiple abnormalities may coexist in an image, requiring each prediction to align with its corresponding spatial evidence. We propose a class-conditioned explanation-guided learning framework that constructs a separate explanation for each positive class and penalizes evidence outside its class-specific annotated regions. We instantiate the framework using Gradient-weighted Class Activation Mapping (Grad-CAM) and evaluate it on 14 abnormalities using EfficientNet-B1, ViT-B/16, ViT-B/32, and Swin-B. Explanation guidance substantially improves annotation alignment across all architectures: All-Saliency Precision increases from 0.140 to 0.625, 0.052 to 0.551, 0.060 to 0.403, and 0.095 to 0.570, respectively. These improvements are accompanied by smaller, architecture-dependent changes in classification performance. Our results show that class-conditioned explanation guidance can substantially improve where multi-label classifiers concentrate their explanatory evidence while largely preserving predictive performance.",
    "published": "2026-10-17T02:27:03Z",
    "updated": "2026-10-17T02:27:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24381"
  },
  {
    "id": "2610.24380",
    "title": "Train Locally, Learn Together: Distributed Multi-Agent Training via ADMM",
    "authors": [
      "Yiwei Chen",
      "Changsheng Wang",
      "Yicheng Lang",
      "Qing Qu",
      "Alfred O. Hero",
      "Sijia Liu"
    ],
    "abstract": "Multi-agent systems (MAS) can outperform individual language-model agents by combining specialized roles, diverse reasoning processes, and collaborative decision-making. However, collaborative MAS training is typically centralized, requiring a common trainer to aggregate role-local trajectories and learning signals and maintain model and optimization states. This motivates a distributed multi-agent learning paradigm in which agents improve system-level capabilities through role-local learning and decentralized communication, paving the way toward scalable, resilient, and self-organizing MAS. To this end, we introduce, to the best of our knowledge, the first optimization-grounded framework for distributed MAS training based on consensus alternating direction method of multipliers (ADMM). We formulate collaborative MAS learning as a consensus-constrained finite-sum optimization problem, naturally lending itself to distributed optimization via ADMM. The proposed approach alternates role-local learning with inter-agent consensus using distributed communication protocols such as ring all-reduce, enabling joint optimization while keeping each agent's data and training state local. We evaluate our framework on distributed safety alignment and general reasoning tasks. Under compromised-agent settings, ADMM can reduce HarmBench attack success rate (ASR) by up to 26.4%, while achieving reasoning gains comparable to centralized training. These results show that distributed MAS training retains the benefits of centralized joint optimization without requiring a centralized trainer.",
    "published": "2026-10-17T02:26:46Z",
    "updated": "2026-10-17T02:26:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24380"
  },
  {
    "id": "2610.23663",
    "title": "PCDFusion: Proposal-Context-Detail Bayesian Rendering for Infrared-Visible Image Fusion",
    "authors": [
      "Rui Liu",
      "Lin Gu",
      "Hesong Li",
      "Ying Fu"
    ],
    "abstract": "Infrared-visible image fusion (IVIF) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks. Visible and thermal infrared observations are physically complementary but unreliable in different ways. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute. To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by posterior action weights rather than direct modality mixing. In this paper, we propose Proposal-Context-Detail Fusion (PCDFusion), a visible-anchored framework that implements this formulation through three rendering stages. PCDFusion preserves potentially useful thermal responses, updates exposure-degraded visible regions, and renders reliable band-limited infrared structures into the final luminance. Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination. The code is available at https://github.com/BIT-RuiLiu/PCDFusion.git.",
    "published": "2026-10-16T15:56:59Z",
    "updated": "2026-10-16T15:56:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23663"
  },
  {
    "id": "2610.23661",
    "title": "An Efficient Approach to Beetle Damage Detection of Banana Using Deep Learning",
    "authors": [
      "Md. Mehedi Hasan Naeem",
      "Ishtiyak Ahmmad Araf",
      "Md. Arefin Haque Mahir",
      "Tushar Kanti Saha"
    ],
    "abstract": "Visible surface damage of banana fruits by Basilepta subcostata (the banana fruit scarring beetle) can reduce their market value. Here, manual inspection of Banana fruits is subjective and difficult to scale. This study presents a lightweight framework based on YOLOv8n deep learning model for locating individual bananas and classifying their visible surface condition as healthy or unhealthy. The term beetle damage in the paper title is used operationally for the locally observed scar-like surface condition; the model does not identify a specific beetle species or biological cause. A custom dataset of 2,473 images containing 5,827 annotated banana instances was prepared from local-market imagery in Bangladesh. The reported experiment used an 80/20 protocol with 1,982 training images and 491 test images. A pretrained YOLOv8n model was trained at 640x640 resolution for 50 epochs with a batch size of 4. On the test partition, it achieved 81.36% precision, 74.30% recall, 77.67% F1-score, 87.04% mAP@0.50 and 59.33% mAP@0.50:0.95. A YOLOv8s comparison gave slightly lower F1 and mAP while using a substantially larger checkpoint. The YOLOv8n checkpoint occupied 5.96 MB and required 6.54 ms/image for inference on an NVIDIA Tesla T4. The results support YOLOv8n as a compact baseline for instance-level banana surface inspection within the studied acquisition conditions.",
    "published": "2026-10-16T15:55:23Z",
    "updated": "2026-10-16T15:55:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23661"
  },
  {
    "id": "2610.23659",
    "title": "FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity",
    "authors": [
      "Yiqun Zhao",
      "Jiachen Xu",
      "Yihao Zhi",
      "Yunfei Zhao",
      "Zibo Zhao",
      "Xintong Han",
      "Chunchao Guo",
      "Shenghua Gao"
    ],
    "abstract": "A 3D asset admits multiple valid part decompositions, while semantics-aware segmentation should reflect both the desired granularity and the parts a user wants to extract. Ideally, a practical segmentation model should strive for a simple principle: what you ask for is what you get. However, realizing this goal is hindered by two core obstacles: the lack of multi-granularity training data and the absence of a holistic control mechanism. We propose FLEXPART, a unified framework for text-controlled 3D mesh segmentation. To establish flexible control, we introduce a holistic control prompt comprising semantic part names with location and shape clauses. To support this mechanism, we utilize an automated Vision-Language Model (VLM) pipeline to construct a large-scale dataset of multi-granularity partitions and their corresponding prompts. Driven by this data, FLEXPART generates a view-independent part-identity field in native 3D space, directly assigning discrete part IDs to mesh faces. To compel the model to respect semantic conditions rather than rely on geometric priors, we train the model using randomized background dropping. Furthermore, an inference-time VLM planner can automatically complete descriptive clauses from 2D renderings, allowing users to simply name the desired parts in ordinary words. FLEXPART with planner-completed prompts outperforms the strongest evaluated baseline by 15% in mIoU, even when that baseline receives ground-truth guidance. On our held-out FLEXPARTBENCH, FLEXPART leads at each granularity and improves average mIoU by 22% over the strongest baseline. With only the requested part names supplied by the user, it also improves IoU by 35% over the strongest click-driven baseline on selective segmentation.",
    "published": "2026-10-16T15:54:52Z",
    "updated": "2026-10-16T15:54:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23659"
  },
  {
    "id": "2610.23653",
    "title": "A Language-Informed Loss for Visual Generation",
    "authors": [
      "Suchir Agarwal",
      "Keshigeyan Chandrasegaran",
      "Ziyu Chen",
      "Kyle Sargent",
      "Juan Carlos Niebles",
      "Li Fei-Fei",
      "Jiajun Wu"
    ],
    "abstract": "End-to-end visual generation with pixel-space loss has recently achieved competitive performance without the need for learned image tokenizers. In this work, we study whether language-informed supervision can provide a richer training signal than pixel loss for visual generation. We introduce LILIE (pronounced \"lily\"), a Language-Informed and Lossless Image Encoder. LILIE is an invertible image transform trained such that a vision-language model can recover captions from noised features. The encoder uses a normalizing flow transformer trained jointly with a vision-language model via next token prediction. We then use the encoder to extract a simple language-informed loss for text-to-image generation. We train JiT models with LILIE loss, reducing gFD by 14 points (66.84 $\\to$ 53.01) against a pixel-only baseline on the GPIC dataset. Our code, encoders, and generative models are available at https://suchiragarwal.com/lilie.",
    "published": "2026-10-16T15:49:12Z",
    "updated": "2026-10-16T15:49:12Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23653"
  },
  {
    "id": "2610.23642",
    "title": "Diversity Without Labels: Task-Agnostic Coreset Selection Across Perception and Action",
    "authors": [
      "Julia Hindel",
      "Benjamin Ramtoula",
      "Kyuhwan Yeon",
      "Nick Heppert",
      "Paul Newman",
      "Daniele De Martini",
      "Abhinav Valada"
    ],
    "abstract": "While data collection for model training is relatively easy, curating high-quality datasets from large collections is inherently challenging. Coreset estimation methods address this problem by identifying the best data subsets to train models on. However, existing approaches often require proxy model training, extensive annotations, or task-specific tailoring. Unsupervised alternatives typically exploit geometric properties in foundation model feature spaces, but are limited to pairwise image-to-image comparisons or comparisons against a fixed subset. We introduce CoreDNA, an unsupervised, task-agnostic coreset estimation approach that pools neuron activations from vision foundation models into per-image and per-dataset distributions. By comparing each image's distribution to the dataset-level distribution, CoreDNA can capture both low-level visual structure and high-level semantic information across layers. We find that high-quality samples concentrate in the tails of the last layer's activation statistics, which we validate by relating them to training-based coreset methods. Building on these findings, we develop a computationally efficient selection mechanism to construct task-agnostic, high-quality coresets for selective annotation and model training. Across image classification, semantic segmentation, depth estimation, and imitation learning for end-to-end driving and mobile manipulation, CoreDNA matches or outperforms the state of the art, demonstrating unprecedented generalization across perception and action tasks. These results highlight the effectiveness of compact activation-based representations for data selection.",
    "published": "2026-10-16T15:43:21Z",
    "updated": "2026-10-16T15:43:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23642"
  },
  {
    "id": "2610.23625",
    "title": "PresenceBench: An Exploratory Evaluation of Large Language Model Adaptation to User State",
    "authors": [
      "Peña Arroyo Gallego",
      "Mauro Ruiz Moreno",
      "Alejandro Acien",
      "Sergio Romero-Tapiador",
      "Teresa Arroyo-Gallego"
    ],
    "abstract": "Presence-aware intelligence is the capacity of an AI system's intelligence layer to adapt appropriately to the functional state of the person it serves (here readiness, flow, and stability) while preserving task quality and safety. We introduce PresenceBench, an instrument for measuring it. PresenceBench evaluates how the intelligence layer uses a supplied state, not how that state is sensed, and breaks the capability into measurable properties. Two are tested here. Receptivity: does the model take up the state and give a better response than with no signal? Specificity: does any improvement depend on the correct state, rather than on extra structured context? A third, adaptation across states, is a required endpoint not measured in this release. A five-arm causal design answers both questions, against each model's own baseline and an equally structured mismatched-state control, scored by a correctness-gated human paired comparison. The exploratory evaluation covered four models across eighteen single-turn, six fixed three-turn and six simulated natural-conversation scenarios. Supplying a synthetic state, raw or translated into a response policy, gave human-preference point estimates above 0.5 for all four models (Claude Sonnet 5, DeepSeek V4 Pro, Gemini 3.6 Flash, GPT-5.6 Terra), with three of eight 95% intervals excluding chance. Specificity was not resolved: no per-model interval excluded chance, and the design cannot yet separate the state values from a generic instruction to adapt. Policy delivery reduced priced cost and output tokens against each model's baseline; these are resource-use changes, not efficiency gains, because correctness non-inferiority was not established. Safety-floor failures were rare (13 of 360 cases), with a non-significant excess under policy delivery. We report the instrument, the frozen results, and the controls a confirmatory study needs.",
    "published": "2026-10-16T15:33:04Z",
    "updated": "2026-10-16T15:33:04Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.23625"
  },
  {
    "id": "2610.23621",
    "title": "Stereo LWIR-RGB Automatic Labeling for Low-Light Camera-Based VRU Detection",
    "authors": [
      "Dimitrios Bouzoulas",
      "Pyry Jäppinen",
      "Pejman Habibiroudkenar",
      "Eerik Alamikkotervo",
      "Risto Ojala"
    ],
    "abstract": "VRU detection in low-light conditions is a key component in ensuring VRU safety during the most collision prone time of the day. Currently, advances in low-light detection are limited due to the lack of large scale datasets and automated labeling methods. Most autolabeling methods use RGB detections as their labels source, which cannot be replicated in low-light conditions. To fill this gap in this paper we present an automated pipeline for low-light VRU labeling. We use LWIR-RGB image pairs and source our labels from LWIR as VRUs differentiate from the background due to their body temperature. Unlike our previous work that relied on a complex hardware setup to align the two modalities, we perform this experiment using a LWIR-RGB stereo setup, lowering hardware complexity and cost, making the pipeline easier to reproduce. We evaluate method end-to-end on a dataset collected in the capital region of Finland. Models trained on our generated labels beat both off-the-shelf baselines and models fine tuned on a hand labeled subset on F1, mAP@50 and LAMR metrics when tested on a manually labeled dataset, and the result holds for two different LWIR detectors. This shows that low-light VRU autolabeling can be made both accessible and effective without specialized alignment hardware.",
    "published": "2026-10-16T15:31:37Z",
    "updated": "2026-10-16T15:31:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23621"
  },
  {
    "id": "2610.23617",
    "title": "GEMS: Molecular Structure Elucidation as Learned Search over Isomer Graphs",
    "authors": [
      "Utku Umur Acikalin",
      "Yingheng Wang",
      "Goncalo J. Gouveia",
      "Tyler J. Schwertfeger",
      "Frank C. Schroeder",
      "Carla P. Gomes"
    ],
    "abstract": "Identifying small-molecule structures from molecular formulas and tandem mass spectra remains a bottleneck in untargeted metabolomics and natural-product discovery. Even when database retrieval or de novo prediction misses the exact structure, the resulting candidates can provide starting points for exploring nearby structures through a few bond edits. We introduce GEMS (Guided Editing of Molecular Structures), which refines candidates through learned 2-switch bond edits that preserve the molecular formula and each atom's total valence. GEMS uses MIST, a pretrained spectrum-to-fingerprint model, to predict fingerprint probabilities once per spectrum. A neural policy compares each candidate's fingerprint with these predictions, links present features to the atoms and bonds that generate them, and scores all valid edits in one forward pass. The policy is trained on shortest edit paths between structures, so it can be pretrained on PubChem isomers without spectra and then fine-tuned with spectrum-predicted fingerprints. At inference, GEMS searches from multiple initial candidates matching the supplied molecular formula and ranks candidates by fingerprint agreement and multi-start consensus. With the target structure excluded from PubChem initialization, three edit rounds achieve Hit@1/Hit@10 of 29.64%/50.81% on NPLIB1 and 30.22%/41.33% on MassSpecGym, exceeding published baselines under comparable settings. On NPLIB1, GEMS achieves higher identification accuracy in about 3.3 minutes end to end, compared with 26.2 hours for our FRIGID run. GEMS also improves identification from generated candidates, including those refined by FRIGID. Experiments with exact target fingerprints identify fingerprint prediction error as a bottleneck in target recovery and final ranking. Deeper search recovers additional targets without retraining, with larger gains from weaker initial candidates.",
    "published": "2026-10-16T15:28:34Z",
    "updated": "2026-10-16T15:28:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23617"
  },
  {
    "id": "2610.24046",
    "title": "LUMINR: Intensity-conditioned Meta-learned INRs for Accelerated Medical Image Registration",
    "authors": [
      "Damian Rynczak",
      "Marek Wodzinski"
    ],
    "abstract": "Implicit neural representations (INRs) have been applied to deformable image registration, where a lightweight network maps a spatial coordinate to a deformation vector. Because an INR encodes one specific signal in its parameters, a fresh network must be optimized for every image pair at test time, which is slow. Existing methods reduce this cost by meta-learning an initialization across a population of image pairs, and condition the weights of the INR globally, so the same conditioning applies at every coordinate while the deformation field it initializes varies across the domain. We propose LUMINR, a meta-learning framework that accelerates this per-pair fitting and in which the conditioning is local instead. LUMINR uses an INR that maps a coordinate, together with local intensity and gradient features, to a deformation vector, so the conditioning varies over the domain at the resolution of the field being modelled. Its objective is to find an initialization of the INR parameters from which the network can be fine-tuned to register any unseen pair in only a few optimization iterations. We evaluate LUMINR on 3D deformable registration of brain MRI from the OASIS dataset, where local conditioning and the meta-learned initialization prove complementary: early in fitting they reach a markedly higher accuracy than either does alone. Fine-tuned from that initialization, LUMINR matches the accuracy of the same conditioned INR fit from scratch in roughly a tenth of the gradient steps and a tenth of the wall-clock time, while the deformation fields stay smooth with negligible folding.",
    "published": "2026-10-16T15:27:29Z",
    "updated": "2026-10-16T15:27:29Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24046"
  },
  {
    "id": "2610.23600",
    "title": "Learning to Discriminate Scene Structures Makes Self-Supervised Depth Learning Scalable",
    "authors": [
      "Mengtan Zhang",
      "Yuchuan Cui",
      "Yu Ma",
      "Zizhan Guo",
      "Wei Ye",
      "Rui Fan"
    ],
    "abstract": "Self-supervised monocular depth estimation is appealing for its potential to scale with unlabeled data, yet existing methods often degrade when trained on diverse scenes. This study finds that, under self-supervision, models tend to encode dataset-specific structural biases rather than transferable scene geometry, leading to cross-domain optimization conflicts. To address this issue, this study proposes the MaSS framework, aiming to make self-supervised depth learning scalable to diverse data. MaSS introduces a dedicated structural representation pathway explicitly decoupled from contextual features, which is guided by a novel scene-structure discrimination objective to learn generalized, layout-aware structural representations for depth decoding. Trained and evaluated on four diverse datasets, both individually and jointly, MaSS substantially outperforms prior self-supervised methods and is the first to consistently benefit from mixed-domain training. Zero-shot evaluation on eight additional datasets further demonstrates its remarkable generalizability, particularly on those entirely out-of-distribution scenes. The source code is publicly available at https://mias.group/MaSS.",
    "published": "2026-10-16T15:17:07Z",
    "updated": "2026-10-16T15:17:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23600"
  },
  {
    "id": "2610.23599",
    "title": "From Trajectories to Differentiated Skills: Cognitive Differentiation for Self-Improving Agents",
    "authors": [
      "Yewei Zhao",
      "Derong Xu",
      "Wei Chen",
      "Yin Xu",
      "Peilun Zhou",
      "Xiaohan Wang",
      "Guojun Yin",
      "Wei Lin",
      "Mingjun Xiao"
    ],
    "abstract": "Large language model (LLM) agents tackle complex tasks through reasoning and interaction with external environments. Agent skills provide persistent, transferable capabilities that guide task planning, inform contextual decisions, support tool use, and enable executable procedures. Yet existing skill-evolution methods largely organize knowledge around skill artifacts, overlooking the functional heterogeneity within individual skills and its implications for knowledge maintenance and use. Inspired by cognitive science, we propose Cognitive Differentiation in Skill Evolution (CDSE), which evolves a unified skill through four functionally distinct yet coordinated components: Meta, Experience, Tool, and Script. CDSE extracts evidence-grounded semantic gradients from successful and failed trajectories, consolidates them by functional role, and applies component-specific updates and validation with cross-component coordination and adaptive invocation. An analysis of 500 top-ranked skill packages shows that 96.8% contain knowledge spanning at least two functional roles. Across six benchmarks, three agent models, and two execution harnesses, CDSE achieves the highest scores in all 36 settings, improving over the Base agent by 7.6 percentage points and the strongest competing method in each setting by 2.6 points on average. Ablation studies further support the importance of functional differentiation and adaptive invocation.",
    "published": "2026-10-16T15:16:56Z",
    "updated": "2026-10-16T15:16:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23599"
  },
  {
    "id": "2610.23598",
    "title": "RL-Guided Temporal Localization for Dual-Channel Retrieval in Long-Horizon Agent Memory",
    "authors": [
      "Dabin Sheng",
      "Zhe Wu",
      "Jinming Zhao",
      "Junliang Xing",
      "Yuanchun Shi"
    ],
    "abstract": "Time-aware retrieval is crucial for long-horizon LLM agents to effectively leverage ever-growing long-term memory. Existing methods focus on lexical or semantic similarity, leading to target memories being crowded out by temporally mismatched yet semantically similar candidates. Even time-aware approaches inject temporal cues only during memory organization or answer generation, overlooking temporal constraints at the retrieval stage, where candidate selection occurs - the root cause of the displacement. Inspired by the temporal contiguity effect in human episodic memory, we propose TIDER (Temporal Interval-driven Dual-channel Evidence Retrieval), a time-aware agentic retrieval framework. Central to TIDER is a reinforcement learning (RL)-trained temporal interval locator that infers the temporal windows in which the evidence lies. RL optimizes window localization as a discrete, non-differentiable retrieval decision, using composite rewards to convert sparse answer supervision into fine-grained retrieval feedback. These temporal windows first define the temporal retrieval channel; the retrieved candidates are then merged with results from the semantic channel and reranked by proximity to the windows. This temporal grounding enables TIDER to retrieve temporally aligned evidence that would otherwise be drowned out by the volume of semantically similar yet temporally mismatched memories. With a lightweight 1.7B locator, TIDER achieves state-of-the-art accuracy on both long-horizon memory benchmarks - 61.52% on LifeBench (+8.82%) and 78.96% on LoCoMo (+3.66%) - which indicates that temporal cues are crucial for pinpointing target evidence amid a vast pool of semantically similar historical events in long-term daily-life memory.",
    "published": "2026-10-16T15:16:50Z",
    "updated": "2026-10-16T15:16:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23598"
  },
  {
    "id": "2610.21581",
    "title": "ClaimScope: Label-Blind Witness Verification for Mathematical Claim Auditing",
    "authors": [
      "Mushir Akhtar"
    ],
    "abstract": "Mathematical agents are commonly evaluated by answer accuracy or proof acceptance. We introduce ClaimScope, a 72-task benchmark for auditing proposed claims through a verdict, scope, counterexample, and repair. Tasks cover optimizer-state transport, finite-horizon affine recurrences, and exact $2\\times2$ linear algebra. We evaluate Qwen3-8B with direct generation and four matched two-pass conditions, each starting from the same draft. A witness checker evaluates only the model's submitted state, without consulting reference verdicts or supplying a replacement witness. Its feedback still conveys information about validity: a verified refutation establishes that the claim is false, and rejection reasons can suggest structural fixes. In this evaluation, verifier feedback yields $23/39$ accepted counterexamples on invalid claims and $25/72$ safe completions, compared with $15/39$ and $20/72$ for checker-free generic feedback. Strict completion remains $17/72$; verdict accuracy changes from $47/72$ to $46/72$. The claim-grouped safe-completion difference is $.094$, with a bootstrap 95\\% interval of $[.000,.198]$. All seven task-level gains follow horizon/input-length diagnostics. A post-hoc schema-only correction of the direct outputs reaches the same 25 safe tasks without another model call. These results separate claim classification from executable evidence, while locating the observed gains in witness-structure correction rather than demonstrating broader reasoning improvement.",
    "published": "2026-10-15T09:29:02Z",
    "updated": "2026-10-15T09:29:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21581"
  },
  {
    "id": "2610.21579",
    "title": "Learning to Search for Executable Patternmaking from Certified Programs",
    "authors": [
      "Zhuotao Xu",
      "Chi Zeng",
      "Liying Yang",
      "Xinxing Yu",
      "Yanyan Liang"
    ],
    "abstract": "Recent models generate sewing patterns from images or text, and program-based representations make these patterns executable. These systems produce a finished pattern and do not model how a patternmaker turns one pattern into another. In practice a new style is made by editing an existing pattern: lengthening the bodice, moving a dart, swapping a sleeve. Pattern archives record the results of such edits and none of the steps. We observe that the steps can be recovered by searching over editing actions until one pattern becomes the other. A deterministic compiler makes the recovered steps checkable. To this end, we present SemDraft, the first framework that learns to search for executable patternmaking programs from paired before-and-after sewing patterns without recorded editing steps. Specifically, a bounded search recovers a program of editing actions and certifies it only after three checks: it recompiles from scratch, every pair of its actions is classified as ordered or interchangeable, and an independent replay reaches the same pattern. The certified programs then train a model that ranks candidate actions inside the same search. On two frozen draws of 80 order-sensitive cases, with every other search component fixed, the learned ranker certifies 63 and 64 cases within 1,000 search executions, against at most 53 and 52 for non-learned rankers.",
    "published": "2026-10-15T09:28:18Z",
    "updated": "2026-10-15T09:28:18Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.21579"
  },
  {
    "id": "2610.21573",
    "title": "MYOPIA: Understanding the Limits of Tree-Based Reasoning in Vision-Language Models",
    "authors": [
      "Islam Mesabah",
      "Sary Elmansoury",
      "Gerrit Großmann",
      "Peter Neigel",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Decision trees can make vision-language model (VLM) classification interpretable by replacing a single prediction with a sequence of root-to-leaf questions. However, the accuracy cost of this greedy, non-backtracking procedure remains unclear. We introduce \\textbf{MYOPIA}, a benchmark comprising four LLM-generated, human-refined decision trees for GTSRB, MNIST, CIFAR-10, and MSCOCO, together with matched prompts, diagnostic protocols, and an evaluation harness. Across GPT-4o, Qwen-VL Max, and LLaMA-3.2 11B Vision, tree traversal underperforms zero-shot prompting in all 12 dataset--model pairs; paired bootstrap analyses consistently favor zero-shot. Our diagnostics characterize interacting failure modes associated with this gap. Models often recall tree-encoded class attributes more accurately than they ground the same attributes in images: the mean label--image accuracy gaps are 9.5, 13.8, and 12.6 points for GPT-4o, Qwen-VL Max, and LLaMA, respectively. Incorrect local decisions then irreversibly exclude the correct class, while answer extraction introduces additional model-dependent loss. A node-level audit of the four trees finds that split entropy is weakly but consistently associated with lower node accuracy, whereas depth, branching factor, and within-node grounding differences are less stable. \\textbf{MYOPIA} therefore provides a framework for diagnosing hierarchical visual classification and motivates testing tree designs that prioritize perceptual answerability and recovery from early errors. Code is available at https://github.com/islammesabah/VLM_Classification.",
    "published": "2026-10-15T09:25:10Z",
    "updated": "2026-10-15T09:25:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21573"
  },
  {
    "id": "2610.21571",
    "title": "Rethinking the Role of Tool Graph Memory in Multi-Turn Tool Use",
    "authors": [
      "Uiji Hwang",
      "Richeng Xuan",
      "Taeuk Kim"
    ],
    "abstract": "Large language model (LLM) agents solve complex tasks by calling external tools over multiple turns. Recent work has proposed tool graph memory, which stores past experience as tool transitions to guide subsequent selection. However, it remains unclear whether this component consistently improves agents' tool use or undermines it. We evaluate tool graph memory on nine models and two benchmarks, finding that it seldom improves significantly over baselines, and that its gains, where present, cost over twice the LLM calls. The memory's guidance is often incorrect, and random or no guidance retains most of the gain, implying that the benefit stems from extra computation rather than the memory itself. Moreover, even with the correct next tool suggested, many failures remain, such as giving up without a tool call. Storing the same experience instead as textual insights outperforms tool graph memory with almost no extra LLM calls. This suggests that memory serves better as a soft prior than as a prescription of the next tool, leading to a more effective and generalizable solution.",
    "published": "2026-10-15T09:24:30Z",
    "updated": "2026-10-15T09:24:30Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21571"
  },
  {
    "id": "2610.21570",
    "title": "Independent Data-Integrity Verification for LLM-Driven Functional Coverage Closure in Hardware Design",
    "authors": [
      "Venkata Krishna Kumar Vedantam"
    ],
    "abstract": "LLM agents can write directed tests that close functional coverage, but coverage only shows that a state was reached, not that the data on the way there was correct. This is a long-known point in verification and we do not claim it as new. We describe a small coverage-closure agent that applies it to an LLM loop: coverage is read from the report that the simulation itself exports (cocotb-coverage YAML) and never taken from the model's account, and data integrity is checked by scoreboards that are separate from the model. On three architecturally distinct RTL designs (an asynchronous FIFO, a UART transmitter and an AHB2APB bridge) the agent raised coverage from 91.7%, 88.9% and 67.4% to 100% within its 8-iteration budget in every logged run, using one design-agnostic agent. A reactive scoreboard monitor attached to the FIFO's base testbench also found a clock-domain-crossing bug in the author's own stimulus code. The monitor is not yet attached to the LLM-generated tests, so their data integrity is not independently checked; one manual check on a single FIFO test is reported as preliminary. We list the weaknesses of this evidence: three designs, no baseline, no ablation, and logged runs that come from several agent checkpoints.",
    "published": "2026-10-15T09:24:01Z",
    "updated": "2026-10-15T09:24:01Z",
    "categories": [
      "cs.AR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.21570"
  },
  {
    "id": "2610.21569",
    "title": "Decoupled Safety Control: A Safety-Control Algorithm for Training-Free Safety Guidance",
    "authors": [
      "Huilin Zhou",
      "Ruoxi Cheng",
      "Yuhang Wang",
      "Yuming Liu",
      "Minghao Sun",
      "Ruolong Ma",
      "Lan Zhang"
    ],
    "abstract": "Diffusion models achieve strong performance in text-to-image generation, but they can still produce unsafe content. Training-free safety guidance offers a practical inference-time alternative that intervenes during sampling without modifying model weights. However, many existing safeguards still rely on a coupled safety-control chain. In this chain, the same unsafe condition simultaneously specifies what should be avoided, indicates the current unsafe signal, constructs the intervention, and determines when that intervention remains active. This coupling can work when unsafe factors are explicit, but becomes less reliable once harmful and benign semantics are entangled in the current generation state, often leaving residual unsafe content or unnecessarily degrading benign-generation quality or prompt fidelity. We address this problem with Decoupled Safety Control (DSC), a plug-in safety-control algorithm for training-free safety guidance. DSC reformulates training-free safety guidance as an explicit state-dependent control process, so the executed intervention is determined from the current generation state rather than inherited directly from a single unsafe condition. Experiments on standard safety benchmarks show that DSC improves representative latent- and text-space safeguards, achieving stronger unsafe-content suppression while preserving benign-generation quality and maintaining efficient inference.",
    "published": "2026-10-15T09:24:00Z",
    "updated": "2026-10-15T09:24:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21569"
  },
  {
    "id": "2610.21565",
    "title": "BiShield-TEE: On the (In-)Security of Unilateral Weight Obfuscation in On-Device TEE-Shielded LLM Partition",
    "authors": [
      "Zhiyuan Wang",
      "Yuezhi Zhou",
      "Ziqi Zhang",
      "Zhu Zhang",
      "Zhixing Tan",
      "Yongheng Deng"
    ],
    "abstract": "On-device deployment of large language models (LLMs) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft. Trusted Execution Environments (TEEs) provide hardware-enforced isolation for on-device inference, yet most TEE-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only the output side. We identify a vulnerability in this design, termed the Solution Determinacy Property (SDP): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection. Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over 2.4 times the full-shielding black-box baseline and recovering near-complete model functionality. To address this vulnerability, we propose BiShield-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates. Experiments across diverse models and datasets show that BiShield-TEE confines attack accuracy to the full-shielding black-box baseline, while achieving higher inference efficiency than prior methods on real hardware. Our code is available at https://github.com/laduiw/BiShield-TEE.",
    "published": "2026-10-15T09:22:45Z",
    "updated": "2026-10-16T04:11:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21565"
  },
  {
    "id": "2610.21561",
    "title": "DialFork: Going Beyond Factuality to Evaluate Procedural Hallucination in Conversational Agents",
    "authors": [
      "Sergio Burdisso",
      "Esaú Villatoro-Tello",
      "Dairazalia Sánchez-Cortés",
      "Yanis Labrak",
      "Jordi Luque",
      "Milos Cernak",
      "Petr Motlicek"
    ],
    "abstract": "Large language models (LLMs) deployed as conversational agents are increasingly expected to follow procedural logic. While factual hallucination has received extensive attention, a different failure mode has been overlooked: procedural hallucination, in which an agent produces individually fluent and factually plausible utterances while deviating from the intended conversational process. We introduce DialFork, the first benchmark to measure this failure mode on raw dialogue text. DialFork is built by forking conformant dialogues at controlled turn positions and injecting one of four hallucination types, yielding 36,278 dialogues across 24 tasks in 12 domains; 30 human annotators validate the construction. We define three evaluation tasks that characterize procedural deviation at three granularities: how far a set of dialogues deviates from conformant ones (monitoring deployed agents), how far a single dialogue does (procedural retrieval), and at which turn a dialogue first goes off-track (real-time guardrails). For the first two, we propose dialog-flow-aware metrics, FlowKL and FlowScore, that compare dialogues by how they unfold rather than their content. At the dialogue level, FlowScore significantly outperforms all baselines across seven encoders, showing that semantic similarity is no substitute for procedural similarity. We release DialFork under open licenses at https://github.com/idiap/dialfork, hoping the community will measure conversational process alongside content.",
    "published": "2026-10-15T09:18:32Z",
    "updated": "2026-10-19T12:57:46Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21561"
  },
  {
    "id": "2610.21555",
    "title": "When Does Muon Actually Win? A Paired Data-, Time-, and Tuning-Budget Benchmark",
    "authors": [
      "Mushir Akhtar",
      "Hazem N. Nounou",
      "Majdi Mansouri",
      "Mohamed N. Nounou"
    ],
    "abstract": "Muon's gains in data efficiency motivate evaluating its performance under explicit data, time, and tuning budgets. On a single A100 GPU, we compare a reference single-device Muon implementation with AdamW across 17.7M- and 33.6M-parameter causal language models and 2.70M-parameter vision transformers. A common 23-candidate development budget selects configurations evaluated with five matched seeds, full validation trajectories, optimizer-step timing, and a frozen one-shot test. Muon reduces validation-loss area under the curve by 3.25--22.44\\% at equal data and lowers test loss in all 20 primary pairs. In this configuration, Muon improves time-normalized loss area} by 19.68--22.31\\% on vision, while AdamW is better by 3.38--6.96\\% on language. The full Muon optimizer call, including auxiliary AdamW updates, consumes 56.1--69.6\\% of training time, compared with 6.1--9.1\\% for the AdamW baseline. Muon also has higher expected regret under restricted access to these candidate pools. These results characterize small models with reference kernels; their wall-clock ordering does not establish a ranking for larger models or optimized implementations.",
    "published": "2026-10-15T09:15:49Z",
    "updated": "2026-10-15T09:15:49Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21555"
  },
  {
    "id": "2610.21554",
    "title": "Uncertainty Quantification in Pairwise Difference Learning for Classification",
    "authors": [
      "Mohamed Karim Belaid",
      "Maximilian Rabus",
      "Eyke Hüllermeier"
    ],
    "abstract": "Instead of learning a mapping from instances to outcomes in the standard way, the key idea of pairwise difference learning (PDL) is to learn a function that takes two instances as input and predicts the difference between the respective outcomes. Given a function of this kind, predictions for a query instance are derived from every training example and then averaged. We propose a version of PDL for the task of classification and propose a suitable meta-learning technique for this purpose. Moreover, we address the problem of uncertainty quantification, i.e., of representing and quantifying the uncertainty of a PDL classifier's predictions in a faithful manner. Building on recent work on the decomposition of total uncertainty into aleatoric and epistemic components, we propose different ways of extending corresponding measures to the setting of PDL, depending on how and to what extent uncertainty is represented by the underlying base learner. In large-scale empirical studies, we analyze both the predictive accuracy and the uncertainty awareness of our PDL classifier.",
    "published": "2026-10-15T09:15:08Z",
    "updated": "2026-10-15T09:15:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21554"
  },
  {
    "id": "2610.21550",
    "title": "Rethinking Classifier-Free Guidance for TI2I Flow Matching",
    "authors": [
      "Andreas Floros",
      "Elena Koritska",
      "Teofilo de Campos",
      "Christoph Vogel",
      "Chu-Tak Li",
      "Anuj Sharma",
      "Alexandros Neophytou"
    ],
    "abstract": "We study Text-and-Image-to-Image (TI2I) flow matching methods for controllable image editing. In a broader generative modeling context, Classifier-Free Guidance (CFG) is established as a key component responsible for high quality outputs. However, we argue that its role in TI2I modeling is poorly understood. Specifically, we make the surprising observation that the CFG mechanism is implicitly harmful for editing in the noisy phase of flow modeling, hindering instruction following and controllability. We propose a simple correction in the early flow steps, enabling a richer alignment-preservation tradeoff at no extra cost. The effectiveness of our approach is demonstrated on both pixel-space and latent TI2I flows.",
    "published": "2026-10-15T09:13:23Z",
    "updated": "2026-10-15T09:13:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21550"
  },
  {
    "id": "2610.21549",
    "title": "When Is Muon Optimal? Radial Fragility and Minimax Geometry",
    "authors": [
      "Ao Xu"
    ],
    "abstract": "Muon replaces a matrix gradient by an approximate polar factor and has shown strong empirical performance in neural-network training. The Isotropic Curvature Model (ICM) provides a curvature-based explanation for this update by asking when gradient orthogonalization minimizes a one-step local-loss surrogate. We investigate the stability of this explanation when the fixed input radius of the ICM is replaced by a general radial law. We introduce the Random-Radius Isotropic Curvature Model (RR-ICM) and the Polar-Factor Admissibility Set, which encodes exact scaled-polar optimality as a geometric condition on the positive polar factor of the gradient. We derive an exact characterization of this set for arbitrary radial laws and show that all nonscalar admissible responses arise from radial atoms aligned with curvature kinks. Consequently, every atomless radial law exhibits zero-capacity rigidity: exact scaled-polar optimality is possible only when the gradient is already a scaled column isometry. To connect the curvature-based framework with the established spectral geometry of Muon, we introduce the Minimax RR-ICM by replacing directional averaging with worst-case optimization over probability laws on the sphere. We prove that every nonzero global minimizer lies on the polar ray of the gradient, while its scale is determined by a one-dimensional convex problem. The corresponding admissibility geometry is a positive-semidefinite trace slab, in sharp contrast to the spherical-zonoid geometry of the RR-ICM. Together, these results expose the radial fragility of average-curvature explanations and provide a new minimax variational characterization of Muon's polar direction.",
    "published": "2026-10-15T09:13:19Z",
    "updated": "2026-10-15T09:13:19Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21549"
  },
  {
    "id": "2610.20319",
    "title": "Beyond Static Cues: Unified Dynamic Detection of MLLM Backdoors via Dual-Flow Trajectory Analysis",
    "authors": [
      "Yinzhen Huang",
      "Jiahe Xie",
      "Yitong Sun",
      "Ruochen Zhang",
      "Xingxing Wei"
    ],
    "abstract": "Multimodal Large Language Models (MLLMs) are increasingly deployed in safety-critical domains, yet their susceptibility to backdoor attacks remains a formidable challenge. While existing defenses have evolved from visual-centric patch cues to unsupervised internal attention statistics, they are fundamentally constrained by a reliance on static snapshots and attack-specific heuristics. Given the intricate interplay between dual modalities, the vast design space for multimodal triggers allows diverse threats, such as textual injections, sub-perceptual noises, and coordinated cross-modal triggers, to easily circumvent such rigid priors, particularly when attack types are unknown in real-world applications. In this paper, we rethink backdoor detection by shifting the diagnostic paradigm from static observations to dynamic output evolution. We observe that a successful attack inevitably hijacks the model's decoding trajectory, skewing internal modal contributions during generation while maintaining an abnormal output invariance despite input perturbations. To capture this behavior, we propose EVO-Detect, a unified detection framework that monitors the dynamic evolution of internal signals during early decoding steps through two complementary channels: Attention Flow and Logits Flow. The attention branch measures how image-text attention allocation evolves during early generation, whereas the logits branch quantifies the sensitivity of the output distribution to modal perturbations through interventional ablations. We then convert these trajectories into compact sample-level metrics and normalize them against negative-control signatures so that natural perturbations are less likely to be mistaken for backdoor evidence. Extensive evaluations show that our approach substantially outperforms state-of-the-art baselines such as BYE and TCAP across diverse attack families.",
    "published": "2026-10-14T15:05:49Z",
    "updated": "2026-10-14T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20319"
  },
  {
    "id": "2610.20312",
    "title": "Reflect After Failure: Brain-Inspired Self-Evolving Agents for Embodied Spatial Intelligence",
    "authors": [
      "Xin Li",
      "Xiaohuan Gu",
      "Yifan Wang",
      "Shaobin Ling",
      "Tianli Shi",
      "Jingao Xu",
      "Zhimeng Yin",
      "Dapeng Wu",
      "Yun Wang"
    ],
    "abstract": "Vision-Language Models (VLMs) have made substantial progress in spatial reasoning, and self-evolving agents further extend these capabilities to embodied environments by learning from interactions. However, current self-evolution remains particularly challenging in embodied spatial tasks, complex and multi-step decisions from partial visual evidence making it difficult to determine why an execution fails. The failure may stem from misperception, insufficient exploration, or incorrect planning, yet execution feedback alone rarely reveals which component is responsible. As a result, simply accumulating interaction experience can reinforce ineffective strategies. To address this, we propose HiMeco, a brain-inspired self-evolving agent for embodied spatial intelligence, inspired by metacognitive monitoring and hippocampal memory consolidation. Through Hippocampal-Metacognitive Reflection, HiMeco diagnoses failures in perception-exploration-planning (PEP), then compares execution attempts to derive reusable strategies and guidance for avoiding recurring errors. It also abstracts interaction programs into parameterized skills, using evidence contracts and execution-based validation to determine their retention and reuse. These strategies and skills guide subsequent interactions, with memory updated only between rounds and model parameters kept frozen. HiMeco achieves state-of-the-art performance on ESI-Bench, and it also improves accuracy on EmbSpatial-Bench by 3.94 percentage points without evolution.",
    "published": "2026-10-14T14:59:04Z",
    "updated": "2026-10-14T14:59:04Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20312"
  },
  {
    "id": "2610.20309",
    "title": "Event Cameras versus Frame Cameras for Synthetic-Aperture Imaging: A Simulation Study",
    "authors": [
      "Jakob Hinterholzer",
      "Mohamed Youssef",
      "Oliver Bimber"
    ],
    "abstract": "Synthetic-aperture imaging (SAI) removes occluders such as foliage by integrating many views of a scene along a camera path. It has so far been used mainly with frame cameras. We ask whether an event camera has advantages for SAI, and answer the question in simulation, where both sensors see exactly the same scene and the same camera movement. A densely rendered Blender sequence is turned into frames with an EMVA~1288 noise model of an industrial global-shutter camera, and into an event stream with the v2e simulator parameterized like a Sony IMX636. The frames are integrated with the existing airborne optical sectioning renderer. For the events we add a new integration path that projects every single event onto the focal plane at its own interpolated pose, so no events have to be binned into frames. We compare the two sensors in three main runs and an additional dark high-speed test. In a bright scene at 25,m/s the frame camera records only three images on the path and cannot remove the occluder, while the event camera reconstructs the target, even after an event-rate controller drops most of its events to fit the camera link. At the same speed in a 5,lux scene the event camera no longer resolves the target either. In a 5,lux scene at 5,m/s both sensors reconstruct the target at similar quality. We also compare the data one traversal of the aperture costs. At high speed the capped event stream still shows the target at the same data volume as the three frames. At 1,m/s we compare both cameras at two matched data budgets, and there the event camera has no advantage over the frame camera in reconstruction quality. The data rate of the event camera depends on the scene and is highest exactly in the fast bright scenes where it is needed most.",
    "published": "2026-10-14T14:56:22Z",
    "updated": "2026-10-14T14:56:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20309"
  },
  {
    "id": "2610.20293",
    "title": "CASI: Credit Assignment via Set Intervention for Agentic Retrieval",
    "authors": [
      "Xinyi Cheng",
      "Tianfu Zhang",
      "Jiwen Li",
      "Xuesen Zhang",
      "Shihao Yu",
      "Pengfei Zhu",
      "Renhuan",
      "Heda Wang"
    ],
    "abstract": "Large language models increasingly generate multiple retrieval actions jointly, while downstream systems often provide only one reward for the resulting set. Broadcasting this reward provides a valid score-function gradient estimator for the expected set-level objective, but does not determine a coalition-dependent within-set attribution. We introduce CASI (Credit Assignment via Set Intervention for Agentic Retrieval), which constructs the missing counterfactual information through snapshot-grounded set intervention: generate and retrieve once, hold replayable snapshot components fixed, and evaluate alternative subsets under common conditions. Shapley aggregation converts these marginals into within-set credit, which bounded zero-sum advantage shaping incorporates into policy optimization. For m >= 4, singleton, leave-one-out, and full-set endpoints do not generally determine the Shapley allocation; under additive set values, extra coalition evaluations are redundant. In a five-action sponsored-search setting, exhaustive auction replay over 1,200 requests reveals substantial coalition dependence. Under the training-time evaluator, CASI achieves the highest median cosine similarity to a replay-defined Shapley reference among evaluated credit rules; under a sensitivity backend, CASI does not outperform Singleton. Across five independent training runs, CASI-trained policies achieve higher held-out auction-replay set value than Singleton- or Broadcast-trained policies. In a randomized seven-day production A/B test on 10% of traffic, the CASI-trained policy yields an observed 3.51% lift in the primary advertiser-value metric over production control.",
    "published": "2026-10-14T14:47:46Z",
    "updated": "2026-10-14T14:47:46Z",
    "categories": [
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.20293"
  },
  {
    "id": "2610.20676",
    "title": "When Correctness Feedback Erases Evidence: Phase-Separated Completeness Auditing in Verus",
    "authors": [
      "Adarsh Agrawal"
    ],
    "abstract": "Correctness feedback suppresses the very evidence that specification-completeness auditing is designed to uncover: programs that satisfy a written contract but violate intended behavior. We demonstrate this objective reversal on 12 Verus/Rust tasks across four model families under matched call budgets. Independent no-feedback discovery more than doubles certified-witness yield relative to IntentShield's corrective-feedback loop (59.0% versus 27.1%). A format-matched iterative control places the larger share of this gap in feedback content, not independent restarts. The advantage holds in every model family and survives parser repair. A separate phase-separated execution matches the aggregate yield without reusing responses; most certified witnesses also fail held-out cases. Preserving these witnesses delivers stronger specification repair: Phase-Revised contracts achieve 81.3% implementation success, versus 62.5% for IS-Revised, with Direct-Revised close behind. Both no-feedback witness sources substantially outperform weakened contracts. The effect does not reproduce in the available Dafny and Lean evaluations, establishing an empirical boundary around the studied Verus/Rust workflow. Completeness auditing and correctness repair have opposing immediate objectives. Preserve and certify the admitted failure before repairing it.",
    "published": "2026-10-14T14:43:24Z",
    "updated": "2026-10-14T14:43:24Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20676"
  },
  {
    "id": "2610.20283",
    "title": "From Semantic Editing Intentions to Persistent Parametric Controls for AI-Assisted Image Editing",
    "authors": [
      "Rifat Mehreen Amin",
      "Michelle Dutoit",
      "Anton Rockenstein",
      "Baptiste Caramiaux",
      "Andreas Butz"
    ],
    "abstract": "AI-powered image editing increasingly allows users to express high-level editing intentions, yet how these intentions are translated into concrete editing actions often remains difficult to understand. We present Atelier, a semantic image editing tool that uses image semantics and user intent to determine which editing controls to surface and how to initialize them. Guided by a formative study with eight image-editing practitioners, Atelier composes context-specific, directly manipulable controls that users can refine rather than committing AI interpretations directly to finished edits. In a within-subjects study with 12 practitioners, participants preferred AI-composed controls, described them as supporting creative exploration, and actively refined AI proposals. However, experiences of control were mixed, and interviews highlighted limited insight into why particular controls and values were proposed. Our findings suggest that making AI interpretations actionable through manipulable controls can support exploration and refinement, but actionability alone does not make those interpretations transparent to all users.",
    "published": "2026-10-14T14:39:58Z",
    "updated": "2026-10-14T14:39:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.20283"
  },
  {
    "id": "2610.22408",
    "title": "ECHOES: Seeing Beyond the Current Image via Recursive History Compression and Privileged On-Policy Distillation",
    "authors": [
      "Tengda Guo",
      "Jiawang Hu",
      "Yifei Tao",
      "Yin Wang",
      "Haotian Hu",
      "Fanyi Wang",
      "Liujuan Tang"
    ],
    "abstract": "Long-horizon GUI agents rely on visual history to maintain task states, but retaining historical screenshots increases visual-token usage and inference costs, while textual summaries can discard critical state information, undermining long-horizon reliability. We propose ECHOES, which leverages training-time privileged information to guide textual history compression and strengthen long-horizon reasoning. Specifically, ECHOES adopts a Compression-Think-Action (CTA) format to recursively update a textual history state and reason. The same model, given privileged multi-image inputs, serves as a teacher that provides dense token-level on-policy distillation on student-generated CTA rollouts. Our Perception-Memory Fidelity (PMF) Gap-guided OPD-RL framework dynamically balances privileged distillation and task-reward optimization, with periodic teacher updates supporting continued improvement. We further introduce ECHOESBMK, a fine-grained diagnostic benchmark derived from real GUI agent failure trajectories to jointly evaluate visual perception and cross-modal state retention. Experiments on four GUI benchmarks and ECHOESBMK demonstrate substantial gains in task performance and memory fidelity. Without retaining historical screenshots at deployment, ECHOES achieves competitive performance with a favorable performance-inference-cost trade-off and exhibits positive zero-shot transfer to unseen visual planning tasks.",
    "published": "2026-10-14T14:39:41Z",
    "updated": "2026-10-14T14:39:41Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22408"
  },
  {
    "id": "2610.20278",
    "title": "A Valid Watermark Is Not a Valid Identity: Spatial-Spectral Adversarial Face Evasion with Watermark Preservation",
    "authors": [
      "Jefferson David Rodriguez Chivata",
      "Davide Ghiani",
      "Simone Maurizio La Cava",
      "Marco Micheletto",
      "Giulia Orrù",
      "Gian Luca Marcialis"
    ],
    "abstract": "Facial image watermarking can support traceability and certification in biometric pipelines, but provenance or manipulation detection alone does not guarantee reliable biometric identity. We introduce a watermark-preserving face evasion attack that targets this gap under a black-box watermarking setting, without access to the watermarking components. The proposed PGD-L_2 attack guides adversarial perturbations with spatial and spectral preservation terms to reduce face-recognition similarity while limiting pixel-level distortion and high-frequency changes that may interfere with hidden watermark cues. Evaluated on controlled facial images with two watermarking schemes, two face-recognition models, and two datasets, the attack achieves evasion rates above 92% at operational thresholds while preserving watermark recovery above 93% for StegaFormer and above 99.7% for FaceSigns, with visual quality above 47dB PSNR at epsilon_2=2.0. These results expose a structural gap in watermark-based facial certification: a face image can remain watermark-valid and visually faithful while becoming biometrically unreliable.",
    "published": "2026-10-14T14:37:52Z",
    "updated": "2026-10-14T14:37:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20278"
  },
  {
    "id": "2610.20274",
    "title": "Resolution Allocation with Learnable Resizing and Spectral Filter Parameterization",
    "authors": [
      "Wei Wu",
      "Eric C. Larson"
    ],
    "abstract": "Learnable downsampling and spectral-domain filter parameterizations have each made convolutional networks more flexible, but their interaction has not been systematically examined. We bridge this gap by examining convolutional kernels learned in the spatial and spectral domains, together with learned downsampling ratios under a cropped resizing implementation. We find that spectral and spatial kernels respond differently to learned resolution allocation, with larger gains for the spectral kernel. We observe this consistently on three datasets (EuroSAT, CIFAR-10 and STL-10) and at two model sizes (differences in accuracy gain of +0.013 to +0.028 on held-out test sets). Part of this difference reflects the greater gain of the spectral kernel from retaining more spatial area, but the difference remains positive when total retained area is matched. This pattern is observed across datasets and model sizes, although its magnitude and dependence on the complexity budget vary with model size and the resizing implementation.",
    "published": "2026-10-14T14:35:28Z",
    "updated": "2026-10-14T14:35:28Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.20274"
  },
  {
    "id": "2610.20272",
    "title": "CSWBench: Evaluating Context-Sensitive Code-Switching in Creative Writing",
    "authors": [
      "Zewen Jiang",
      "Yahan Li",
      "Chenlu Guo",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Large language models (LLMs) have demonstrated multilingual capabilities across diverse language generation and understanding tasks. Yet effective code-switching requires more than multilingual proficiency: models must decide when, where, and why to switch languages in ways that fit the surrounding context. This context-sensitive ability remains insufficiently evaluated. We introduce CSWBench, a benchmark for evaluating context-sensitive code-switching in creative writing through two complementary settings: Focused Narrative and Extended Narrative. We further propose CSWEval, a theory-informed framework with two complementary levels: event-level evaluation of Licensing, Contextual Appropriateness, and Functional Gain, and whole-text evaluation of task-specific quality---overall literary and narrative quality in Focused Narrative and quality emphasizing multilingual organization in Extended Narrative. Evaluating twelve LLMs, we find that models exhibit meaningful but uneven code-switching competence across narrative contexts. Model differences are particularly pronounced in multilingual literary integration, while multilingual-focused dimensions show stronger difficulty effects overall than the general narrative dimensions; narratively salient switches are associated with stronger contextual and functional realization; and event-level CS quality is moderately associated with whole-text performance.",
    "published": "2026-10-14T14:33:48Z",
    "updated": "2026-10-14T14:33:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20272"
  },
  {
    "id": "2610.20264",
    "title": "FUSE: Fairness-aware Update Screening against Byzantine Exploitation in $q$-Fair Federated Learning",
    "authors": [
      "Tiantong Sun",
      "Jinlin Liu",
      "Xingru Wei",
      "Zequan Fang",
      "Wei Chen",
      "Qiang Yang",
      "Xiaojin Zhang"
    ],
    "abstract": "Client-level fair federated learning, in the form of $q$-fair federated learning ($q$-FFL), agnostic federated learning, or tilted empirical risk minimization, has emerged as an attractive solution to equalize utility across heterogeneous clients. This paradigm grants high-loss clients greater relative influence, while a central server aggregates their loss-weighted updates into a single shared model. Yet, the Byzantine robustness of $q$-fair federated learning has been largely neglected, leaving the server unable to tell legitimate fairness-induced amplification from malicious update scaling. To address this critical gap, we formalize the problem of Byzantine-robust $q$-fair federated learning under an \\emph{update-only interface}, in which the server observes nothing but the fairness-scaled client updates. Our analysis under shared class-conditional label skew shows that fairness scaling preserves the nonnegative class-mixture structure of honest updates, while replacing their unit-sum constraint by a client-dependent radial scale. Moving beyond magnitude-based screening, we show that this warped geometry supplies two complementary tests, one radial and one structural, that a single norm cannot provide. We then introduce FUSE, a structure-aware robust aggregator that uses a small trusted labeled dataset for coefficient recovery, scale and cone-consistency screening, and post-screening step-size control. Across four benchmarks and seven Byzantine attacks, FUSE improves seed-wise worst-attack accuracy over the strongest baseline on each benchmark by 3.9--30.1 percentage points, while largely preserving the influence of the high-loss honest clients that fairness is meant to protect.",
    "published": "2026-10-14T14:29:48Z",
    "updated": "2026-10-14T14:29:48Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20264"
  },
  {
    "id": "2610.20261",
    "title": "Harness Policy Distillation: Aligning Agent Policies with Runtime Semantics",
    "authors": [
      "Junze Zhu",
      "Weihao Chen",
      "Zhiyang Zhou",
      "Zhen Wu",
      "Xinyu Dai"
    ],
    "abstract": "Deploying a general-purpose model as an agent means running it inside a product-specific runtime harness that decides which actions are executable, how state advances, and when the loop may terminate. Ordinary trajectory supervision shows which action was taken but leaves the runtime semantics behind that action implicit. We introduce Harness Policy Distillation (HPD), which makes these runtime control semantics an explicit training target alongside actions to align the harness policy. HPD replays reference trajectories through the harness to recover the runtime semantics that are implicit in ordinary trajectory data, and represents them as control documents at each model-call boundary. These documents provide privileged information for a teacher to generate actions, while harness verification ensures that the resulting targets are executable under the runtime contract. We jointly train a shared model on the runtime semantics recovered from control-state privileged information and native history, thereby internalizing these semantics into the model policy. At deployment, the trained model uses the original harness interface without requiring the control document or any additional supplement. On TRAJECT-Bench with the Pi harness, Qwen3-8B trained with HPD reaches 22.98% autonomous task success and 49.23% runtime compliance, against 3.09% and 19.90% for the unadapted model. Harness-verified teacher actions substantially improve the native deployment policy, while joint control-state supervision provides further gains in task completion and runtime compliance. HPD turns executable runtime semantics into dense supervision for learning harness-compatible actions at each decision boundary.",
    "published": "2026-10-14T14:28:02Z",
    "updated": "2026-10-14T14:28:02Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.20261"
  },
  {
    "id": "2610.18613",
    "title": "Does self-distillation improve reasoning?",
    "authors": [
      "Jason Ken Adhinarta",
      "Raina Wu",
      "Ashutosh Sharma",
      "Avinash Balakrishnan",
      "Rameswar Panda",
      "Polina Golland",
      "Yoon Kim",
      "Zhang-Wei Hong"
    ],
    "abstract": "Self-distillation is an emerging approach that trains a model to imitate its own predictions when conditioned on privileged information, such as correct answers or environmental feedback. Recent methods have reported better sample efficiency and generalization than reinforcement learning (RL), but it remains unclear whether these gains extend beyond in-distribution evaluations and whether they stem from privileged distillation. In this paper, we revisit two representative methods, Self-Distillation Policy Optimization (SDPO) and On-Policy Self-Distillation (OPSD), across code, science, tool use, and math reasoning tasks. We find that their reported gains do not consistently generalize to unseen problems and are largely explained by overfitting or transferring existing reasoning behavior, rather than effectively using privileged information. Moreover, self-distillation gradients show weak alignment with policy gradients that directly optimize expected reward, questioning whether they provide an effective direction for policy improvement. Our experiments across Qwen3 models (1.7B-14B) and OLMo-3-7B suggest that effectively leveraging privileged information to improve reasoning remains an open challenge. Our code is available at https://github.com/sleepypandu/does-sd-improve-reasoning",
    "published": "2026-10-13T15:59:36Z",
    "updated": "2026-10-13T15:59:36Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18613"
  },
  {
    "id": "2610.18612",
    "title": "Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications",
    "authors": [
      "Yang Luo",
      "Tiantian Ji",
      "Zifeng Kang",
      "Yucheng Wang",
      "Yong Liu",
      "Zhiyi Yin",
      "Xinran Liu"
    ],
    "abstract": "System One models such as Jev change how software makes decisions by mapping open-ended semantic contexts into structured judgments that directly drive program execution. However, this paradigm introduces a new security risk, which we term Jev Program Decision Hijacking (JPDH): attacker-controlled contexts can redirect program decisions through schema-valid Jev judgments. Existing evaluations focus primarily on model-level attacks or predefined injection channels, leaving attack reachability and downstream security consequences in real-world Jev applications underexplored. In this paper, we present JevProbe, the first automated framework to evaluate JPDH by tracing adversarial influence from reachable context surfaces through program-consumed decisions to downstream security consequences in real-world Jev applications. Our key insight is that application logic maps diverse Jev judgments to observable decisions, enabling systematic, program-grounded attack evaluation. Across 228 popular real-world Jev applications and 2,273 test cases, 81.5% exhibit decision flips, of which 98.6% lead to potential downstream security impacts. Compared with the strongest adapted baseline, JevProbe improves macro-average Decision Flip Rate (DFR) by 50.4 percentage points, while existing defenses offer limited protection. We further construct JevProbeBench to support systematic evaluation of JPDH in real-world Jev applications. We have responsibly disclosed our findings to Jev application maintainers, pending their responses. The source code of JevProbe and the JevProbeBench dataset are publicly available on GitHub (https://github.com/xiaoxiaohg8d/JevProbe-).",
    "published": "2026-10-13T15:59:31Z",
    "updated": "2026-10-13T15:59:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18612"
  },
  {
    "id": "2610.18610",
    "title": "Jev-ToM: Evaluating Theory of Mind in Typed Decision Models",
    "authors": [
      "Kawai Chung",
      "Chunkit Chan",
      "Yuxuan Liu",
      "Yauwai Yim",
      "Xi Yang",
      "Wenbin Hu",
      "Huihao Jing",
      "Chiu Yeung Tang",
      "Changxuan Fan",
      "Ki Sen Hung",
      "Tsun On Kwok",
      "Haoran Li"
    ],
    "abstract": "Dialogue and collaborative assistants repeatedly judge what a partner knows, believes, or intends. Typed decision models offer a potential alternative to generative large language models for bounded Theory of Mind (ToM) selection. We present Jev-ToM, comparing five typed decision models and seven generative baselines on 11,117 English text questions from nine ToM benchmarks across six capability groups. TypeSafe Jev reaches 73.2% source-balanced accuracy including native controls and ranks first or second across all six capabilities, leading beliefs, goals/desires/intentions, and emotions. Other typed models show distinct strengths across tasks. Separate resource comparisons suggest that Jev could reduce the cost and waiting time of repeated ToM selection. Confidence-based selection remains benchmark-dependent, and supplied reasons can repair errors or overturn correct answers depending on their attachment. Candidate expansion reveals distinct selection and output-validity problems. Related-question cues account for most of Jev's downstream gains, with task-dependent effects from predicted states. The findings motivate testing Jev as a ToM selection component in assistants, with task-specific confidence calibration, candidate design, and output validation as integration priorities.",
    "published": "2026-10-13T15:59:00Z",
    "updated": "2026-10-13T15:59:00Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18610"
  },
  {
    "id": "2610.18609",
    "title": "DPOison-VL: Clean Preference Poisoning in Vision-Language Direct Preference Optimization",
    "authors": [
      "Chengtao Jian",
      "Kai Yang"
    ],
    "abstract": "Direct Preference Optimization (DPO) has become a widely adopted approach for aligning vision-language models (VLMs), yet the security of multimodal preference data remains largely unexplored. Existing preference poisoning attacks either corrupt explicit supervision signals or require visible triggers, making them detectable under human inspection. We introduce DPOison-VL, the first clean preference poisoning attack against VLM-DPO, which manipulates model alignment solely through imperceptible perturbations on a small fraction of training images, while leaving all prompts, responses, and preference annotations semantically intact. We formulate poison construction as a bilevel optimization and derive a gradient alignment surrogate that efficiently steers image perturbations toward the attacker-specified preference. We further introduce a preference displacement score for principled poison selection with provable first-order optimality under a fixed poison budget, and derive a sufficient condition for preference inversion. Extensive experiments across diverse attack tasks, different VLM architectures and scales, and baseline comparisons demonstrate that DPOison-VL achieves up to 98\\% ASR with only 2\\% poisoned data and exhibits cross-model transferability, while largely preserving clean accuracy and general utility. Our findings reveal a critical vulnerability in VLM-DPO, where imperceptible image perturbations in preference training data can silently redirect alignment.",
    "published": "2026-10-13T15:58:58Z",
    "updated": "2026-10-13T15:58:58Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18609"
  },
  {
    "id": "2610.18607",
    "title": "Recasting DiT for Extreme Image Compression with Hierarchical Visual Priors",
    "authors": [
      "Yunuo Chen",
      "Jingnan Gao",
      "Bing He",
      "Jinjing Zhao",
      "Chuqin Zhou",
      "Xiaoyue Ling",
      "Li Song",
      "Guo Lu",
      "Wenjun Zhang"
    ],
    "abstract": "Pretrained diffusion models provide powerful generative priors for extreme image compression, but their stochastic, iterative generation processes are not designed to decode compressed representations directly. We present PrismCodec, which recasts a pretrained Diffusion Transformer (DiT) as a bitstream-grounded one-step generative decoder. PrismCodec uses the decoded representation in two complementary roles: a projected codec state defines the starting state for generation, while hierarchical visual priors derived from the same decoded latent provide semantic and structural guidance. To bridge the gap between stochastic, iterative generation and deterministic one-step decoding, we develop a progressive adaptation strategy. We first learn codec-conditioned transport from a noisy neighborhood centered on the codec state, distill it into a one-step mapping, and finally anneal the source perturbation to zero during end-to-end optimization. The resulting decoder reconstructs deterministically from the received representation without additional conditioning bits. Across Kodak, CLIC, and DIV2K, PrismCodec consistently improves rate-perception performance over prior generative codecs, achieving BD-rate reductions of 70-75% in LPIPS and 75-81% in DISTS over StableCodec. Code will be released upon acceptance.",
    "published": "2026-10-13T15:58:40Z",
    "updated": "2026-10-13T15:58:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18607"
  },
  {
    "id": "2610.18606",
    "title": "Beyond Answer Voting: Fine-Grained Correction of LLM Reasoning through Graph Alignment across Sampled Traces",
    "authors": [
      "Haotian Liu",
      "Yingjian Chen",
      "Xiaohang Xu",
      "Lang Huang",
      "Yusuke Iwasawa",
      "Yutaka Matsuo",
      "Irene Li"
    ],
    "abstract": "Large language models increasingly tackle tasks that require multi-step reasoning, where errors in intermediate claims can affect the final answer. Self-consistency (SC) improves reasoning by voting over sampled final answers, but its vote leaves intermediate disagreements unresolved. To address this problem, we introduce DDRG (Disagreement-Driven Verification Guided by Reasoning Graphs), a framework for selective correction from a frozen bank of reasoning traces. Our insight is that graph alignment can expose claim-level disagreements and provide correction evidence without expanding the sampled trace bank. DDRG builds source-grounded claim graphs and sends localized conflicts to an answer-blind verifier. A verifier-supported refutation that reaches the majority answer's supporting path triggers one focused repair; otherwise, DDRG returns the exact SC vote. Experimental results across five benchmarks show that native zero-shot DDRG improves macro-average accuracy over direct answering by 8.65 and 15.83 percentage points for Qwen2.5-7B and Llama3.1-8B. It also exceeds CoT, the evaluated GoT and GoV question-answering adaptations, and SC on this macro metric. DDRG links local verification to selective correction without enlarging the initial candidate bank.",
    "published": "2026-10-13T15:58:02Z",
    "updated": "2026-10-13T15:58:02Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18606"
  },
  {
    "id": "2610.18604",
    "title": "LLM2R: From Large Language Models to 3D Reassemblers",
    "authors": [
      "Zhouhan Zhong",
      "Qiuhong Shen",
      "Xingyi Yang",
      "Jinyi Xu",
      "Xinchao Wang"
    ],
    "abstract": "3D part assembly aims to reconstruct a complete shape from a set of unassembled parts by predicting a rigid SE(3) transformation for each part. Because the placement of a part is rarely determined by its own geometry, the task demands reasoning over the entire part set, and existing methods, which rely on pairwise relations or iterative generation and verification, scale poorly to objects with many parts. We present LLM2R, which casts part assembly as sequence modeling with a pretrained decoder-only large language model (LLM): a Point-BERT encoder and a Q-Former compress each part into a block of geometric tokens, the blocks of all parts are concatenated, and a causal LLM adapted with Low-Rank Adaptation (LoRA) processes the sequence in one forward pass. Causal attention, however, lets the hidden states of a part observe only the parts that precede it. LLM2R therefore appends a block of learnable summary tokens after the last part: these tokens follow every part, so their states aggregate the whole assembly at a constant token cost, and a part-aware pose head fuses each part's states with them before predicting its rotation and translation. One architecture thus handles semantic and geometric assembly and predicts all poses in a single non-autoregressive pass. LLM2R achieves the highest part accuracy and success rate on all three PartNet categories, the best rotation error, translation error, and part accuracy on PartNeXt, and the lowest translation error and fastest inference on Breaking Bad, where only a fracture-specialized method is more accurate. Its advantage grows with the number of parts: at 100 parts it exceeds GARF by 33.5 points in part accuracy on Breaking Bad and Assembler by 29.1 points on PartNet, and it transfers zero-shot to unseen categories with more than 16 points higher part accuracy than the strongest of three baselines.",
    "published": "2026-10-13T15:57:41Z",
    "updated": "2026-10-13T15:57:41Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.18604"
  },
  {
    "id": "2610.18603",
    "title": "AgentStripes: An Evidence-Graded Maturity Model for AI Agents",
    "authors": [
      "Nutan Kumar Naik",
      "Vijay Prasad Poudel",
      "Aditya Kumar Saroj",
      "Saurav Samantray",
      "Abhishek Patel"
    ],
    "abstract": "Benchmarks report what an Artificial Intelligence (AI) agent can do on a task suite, but not whether one released version has been engineered with the controls that make it reliable, safe and observable, or how strongly that is shown. This paper proposes AgentStripes, an evidence-graded maturity model for AI agents. It defines levels (0 to 7 stripes), process areas (12 areas holding 40 capabilities), three gates (basic, safety, proof) that hold an agent at a level however high its score, and evidence grades E0 to E5. Each applicable capability receives a rating from 0 to 3 and a separate evidence level; these are combined into a credit, aggregated into a severity-weighted score and converted into stripes that the gates limit. Instruments gather evidence, language-model judges interpret it under explicit criteria, and the arithmetic is deterministic. The model is compared with standards at topic level without a claim of conformance, and an unexecuted validation protocol is specified. An empirical evaluation (exploratory, non-confirmatory) of 30 public Python agent repositories, with static evidence only, is a demonstration and not a validation: static evidence caps every final stripe at 2, 26 repositories end at one stripe and 4 at two, and this distinction is unreliable, since re-judging changed the final stripe of 4 of 22 repositories (engine, dossier and panel changed), whereas none of 8 panel-only repeats, all at stripe 1, changed. The parameters are expert conventions without outcome based calibration, and the stripes have not been shown to predict reliability or safety.",
    "published": "2026-10-13T15:57:28Z",
    "updated": "2026-10-13T15:57:28Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.18603"
  },
  {
    "id": "2610.18602",
    "title": "Auditing Future-Memory Use in Point-in-Time Language Agents",
    "authors": [
      "Rongtian Ye"
    ],
    "abstract": "Point-in-time (PIT) agents can recall post-cutoff facts even when their external evidence respects a historical cutoff. We examine whether this access predicts evidence gathering in 48 historical company-comparison tasks. Independent closed-book revenue probes identify the better-remembered company for each model on tasks with unequal recall, fixing the predicted direction before agent runs. We then compare paired runs with real or anonymized company identities while keeping external evidence PIT-valid. Both Qwen and DeepSeek recalled future facts, but neither supported the prespecified shift toward the better-remembered company. Qwen's four allocation estimates on 28 unequal-recall tasks were negative, with descriptive intervals spanning zero. A prospective DeepSeek replication showed an inverse pattern across all four metrics on 20 such tasks, with intervals below zero. These estimates remained negative after each company, pair, and future-fact omission, and all four post-hoc max-T-adjusted sign-flip p-values were below .05. In a prospectively specified follow-up, explicit future facts produced small estimated shifts away from the supplied-fact company, with intervals spanning zero, while final choices shifted toward it. The mechanism behind the natural inverse pattern remains unresolved. These findings support separate assessments of memory accessibility, search allocation, and final outputs alongside cutoff checks on external evidence.",
    "published": "2026-10-13T15:56:58Z",
    "updated": "2026-10-13T15:56:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18602"
  },
  {
    "id": "2610.18598",
    "title": "Rethinking Projector Training in Multimodal LLMs",
    "authors": [
      "Fabian Gröger",
      "Naël Ouerghemi",
      "Shuo Wen",
      "Maria Brbić"
    ],
    "abstract": "Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image-caption datasets, followed by joint training of the full multimodal model. Despite its widespread use, the role of the projector training stage remains poorly understood. We find that (i) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and (ii) projectors trained on different datasets can be linearly interpolated while largely preserving performance. These results suggest that projector training mainly performs a coarse alignment, which many different projectors achieve equally well. Motivated by these findings, we propose PORTAL, a training-free projector initialization that requires neither paired image-caption data nor gradient-based optimization, but only per-modality summary statistics. PORTAL computes an optimal-transport-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, so that the projector training stage can be skipped entirely. Without any paired data, PORTAL matches the standard pipeline trained on 558k image-caption pairs across six LLM backbones, two vision encoders, and 16 benchmarks. It outperforms that pipeline in $3$ of $7$ (vision encoder, LLM) settings and reaches an average $98\\%$ of its score across the other four.",
    "published": "2026-10-13T15:53:53Z",
    "updated": "2026-10-13T15:53:53Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18598"
  },
  {
    "id": "2610.18597",
    "title": "PhysicsSliders: Learning Physical Controls for Audio Foley Generation",
    "authors": [
      "Peiwei Chang",
      "Yongqiang Chen",
      "Yuelan Cheng",
      "Liting Gao",
      "Yishun Lu",
      "Li Zhang",
      "Mark D. Plumbley",
      "Philip J. B. Jackson",
      "Wenwu Wang"
    ],
    "abstract": "Physical properties provide intuitive controls for sounds made by interacting objects. The challenge is to make a generative model respond predictably to these controls, both individually and in combination. We present \\method\\ (PXS), trained on simulated contact sounds with 15 material, geometry and contact parameters. Two separately trained variants accept direct parameter inputs or numerical captions. PXS controls hardness, size, speed and damping, supports room descriptions and produces spectrally distinct outputs at fixed targets. When controlling damping and size together, specifying thickness improves frequency accuracy and joint target delivery. Measurements from real recordings define effective-damping targets, which simulator inversion maps to generation inputs without real-audio fine-tuning. Across 18 impact classes from five real-audio datasets, PXS-Physical follows these targets with mean grouped Spearman correlation $ρ=0.976$ and class-median error 0.094 dex (a factor of 1.24).",
    "published": "2026-10-13T15:53:45Z",
    "updated": "2026-10-13T15:53:45Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18597"
  },
  {
    "id": "2610.18596",
    "title": "ACCRUE: Continual Off-Policy Reinforcement Learning for Robot Foundation Models",
    "authors": [
      "Changyeon Kim",
      "Kimin Lee",
      "Yashraj Narang",
      "Yijie Guo"
    ],
    "abstract": "Reinforcement learning (RL) post-training improves robot foundation models (RFMs) beyond their demonstrations, but real-world deployment demands more: learning new tasks efficiently while retaining previously acquired behaviors. Existing continual RL methods on top of VLAs mitigate forgetting but rely on on-policy updates with limited forward transfer, whereas off-policy methods improve single-task sample efficiency without addressing learner persistence across tasks. We propose ACCRUE, a continual off-policy RL framework that carries lightweight actor and critic networks across tasks, allowing each stage to reuse behavioral and value knowledge acquired through prior RL. The inherited critic adapts only on current-task transitions and guides current-task actor learning, while prior behavior is preserved by distilling the actor toward cached targets on a small number of retained episodes. Fixed visual features keep the inherited learner and its replay compatible with base-policy updates. Across contact-rich assembly sequences in simulation and on real-robot hardware, ACCRUE accelerates subsequent-task learning with near-zero forgetting and significantly reduces real-robot training time by 31.0\\% to 68.5\\%.",
    "published": "2026-10-13T15:53:26Z",
    "updated": "2026-10-13T15:53:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18596"
  },
  {
    "id": "2610.17019",
    "title": "Understanding Personalization Gains in Whisper",
    "authors": [
      "Sergei Katkov",
      "Antonio Liotta"
    ],
    "abstract": "Whisper-style ASR models provide strong zero-shot transcription, but their residual errors are not evenly distributed across datasets, recording conditions, and metadata-based groups. We study when lightweight low-rank adaptation (LoRA) improves Whisper and whether observed gains require group-specific adapters. Across Common Voice, LibriSpeech, and VoxPopuli, we compare zero-shot Whisper, pooled LoRA, and group-specific LoRA under matched within-group splits. We find that adaptation is not uniformly beneficial: gains are concentrated in difficult Common Voice groups, are consistent on VoxPopuli, and largely disappear on low-error LibriSpeech. Crucially, pooled LoRA often matches, and sometimes clearly outperforms, group-specific LoRA. Gains over zero-shot should therefore be tested against matched pooled adaptation before being interpreted as evidence of personalization.",
    "published": "2026-10-12T15:59:09Z",
    "updated": "2026-10-12T15:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.17019"
  },
  {
    "id": "2610.17016",
    "title": "ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty",
    "authors": [
      "Yuyang Dai",
      "Yuting Tang",
      "Futoshi Futami",
      "Takashi Ishida"
    ],
    "abstract": "Evaluating model uncertainty on real-world data is challenging because each instance provides only a single observed label, leaving true conditional class probabilities unknown. To address this, we introduce ProbabilityBench, a benchmark that provides exact, instance-level class probabilities across three simulated text-based domains: peer review, covert information transfer, and credit risk. By explicitly defining the full data-generating process for each environment, we analytically compute both exact class probabilities and Bayes error. Furthermore, we provide a theoretical guarantee that rendering these cases into natural-language memos strictly preserves their underlying generative probabilities. This exactness enables direct measurement of reported probability quality via KL divergence. Across 16 evaluated models, most models on the observed cost-quality Pareto frontiers are decision models, including Jev and Perplexity Decider. Finally, ProbabilityBench serves as a meta-evaluation framework, leveraging known ground-truth values to benchmark the accuracy of standard calibration metrics and Bayes-error estimators themselves.",
    "published": "2026-10-12T15:58:15Z",
    "updated": "2026-10-12T15:58:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.17016"
  },
  {
    "id": "2610.17015",
    "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
    "authors": [
      "Hao Yu",
      "Haoyu Chen",
      "Hui Wei",
      "Yan Jiang",
      "Nicu Sebe",
      "Guoying Zhao"
    ],
    "abstract": "Scaling up data and model capacity has driven substantial progress in visual representation learning. However, conventional pretext tasks exhibit diminishing returns on fine-grained facial analysis. We attribute this to a scaling bottleneck: these tasks model each image's appearance and are dominated by identity, pose, and illumination, so subtle within-identity facial differences contribute little to the training signal. We introduce DIME, a differential masked autoencoder for large-scale facial representation learning. DIME builds on a simple observation: two images of the same person share identity-specific appearance, so their difference exposes facial changes. DIME reconstructs both masked images in an identity-matched pair and, through an Explicit Differential Direction Supervision (EDDS) objective, aligns the direction of their reconstructed difference with the true difference, while source isolation makes each reconstruction depend only on its own image. Shared appearance cancels in this difference, and because EDDS ignores magnitude, subtle facial changes count as much as large pose or illumination changes. DIME uses identity labels only to form pretraining pairs, requires no dense annotations, and learns dense facial representations with emergent part-level semantics. We pretrain DIME on 20 million high-resolution facial images consolidated from existing face datasets. DIME's AU detection performance continues to improve as pretraining data scales from 6M to 20M images, with its BP4D F1 increasing by 5.9 points, while MAE gains only 0.5 points on the same subsets. DIME also outperforms specialized facial methods on AU detection, AU intensity estimation, cross-domain anti-spoofing, landmark localization, head pose estimation, face parsing, and face generation.",
    "published": "2026-10-12T15:57:06Z",
    "updated": "2026-10-12T15:57:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17015"
  },
  {
    "id": "2610.17014",
    "title": "MAGNET: Manifold-Aware Graph Diffusion Network for Connectome Generation",
    "authors": [
      "Protyay Dey",
      "Ayush Roy",
      "Hyuna Cho",
      "Won Hwa Kim",
      "Vishnu Suresh Lokhande"
    ],
    "abstract": "Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class-conditional geometry buried under coarse labels. We propose MAGNET, a Manifold-Aware Graph Diffusion Network which uses a normalized-Cholesky representation of the manifold of correlation matrices that guarantees validity. MAGNET lifts noisy latent states into ROI-level region tokens and performs denoising with a relational inductive bias over brain atlas regions. To deal with structural problems induced by coarse labels, MAGNET employs class-anchored conditioning, amortized structural bridge, and relevance-preserving corruption. Across ABIDE, ADNI, and OASIS-3, MAGNET consistently achieves favorable results compared to previous manifold-aware approaches, demonstrating improvements of 7-21% in class-conditional fidelity ($α,β$-F1) across three cohorts and better sampling efficiency. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero-shot setting, improving subclass covariance alignment ($λ$-MSE) by over 30%. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis. Moreover, efforts in making the diffusion denoising class-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings. The code repository can be found at https://github.com/protyayofficial/MAGNET.",
    "published": "2026-10-12T15:56:09Z",
    "updated": "2026-10-12T15:56:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17014"
  },
  {
    "id": "2610.17009",
    "title": "MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation",
    "authors": [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Hongchen Luo",
      "Xueyang Fu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models (MGMs) remains largely underexplored. Existing approaches that directly adapt Group Relative Policy Optimization (GRPO) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high-entropy subject token exploration while amplifying intra-group reward variance through exploratory-exploitative routing to yield more discriminative advantage estimates. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them. Extensive experiments on multiple text-to-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28.89 to 36.39, achieving state-of-the-art performance.",
    "published": "2026-10-12T15:52:58Z",
    "updated": "2026-10-12T15:52:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17009"
  },
  {
    "id": "2610.17002",
    "title": "Governing Copyright Responsibly in the Era of Generative AI",
    "authors": [
      "D. Kochetkov"
    ],
    "abstract": "Large language models are trained on collections that may include scholarly works, while authors generally lack work-level information about whether and how their works were used. This paper asks how copyright governance frames and operationalises the protection of such authors, and what a responsible alternative would require. Forty legislative, judicial and soft-law instruments issued between 2019 and 2026 were coded deductively against a framework derived from Responsible Research and Innovation theory, yielding 1,337 category assignments across 835 segments. The European Union and the United States are the primary cases; the United Kingdom, China and international bodies serve as comparators. Normative orientation and the distribution of responsibility dominate the corpus, while reflexivity is the least represented category and reaches its minimum in the US sub-corpus. Both primary jurisdictions frame protection procedurally rather than as an entitlement, and no instrument in the corpus creates a general author-facing attribution duty for the use of works in AI training. From the coded gaps, the paper derives a six-instrument governance design and a capacity-based allocation of responsibility among developers, publishers, collecting societies, funders, institutions, regulators, and individual authors.",
    "published": "2026-10-12T15:50:05Z",
    "updated": "2026-10-12T15:50:05Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.17002"
  },
  {
    "id": "2610.16998",
    "title": "Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents",
    "authors": [
      "Cong Pang",
      "Jiaqi Su",
      "Chengrui Wu",
      "Kuihao Yan",
      "Tianrui Zhang",
      "Zixuan Qiu",
      "Chao Lin",
      "Zixiu Lin",
      "Zixuan Chen",
      "Zelin Xiao",
      "Tiankuo Yao",
      "Jiawei Hong",
      "Zixuan Chen",
      "Dan Xu",
      "Lewei Lu",
      "Wenjie Wang",
      "Xin Lou"
    ],
    "abstract": "Deep search enables language agents to solve complex information-seeking tasks through iterative web exploration. However, developing robust open-source agents remains challenging for three reasons. First, opaque trajectory-construction pipelines make training data difficult to audit and reproduce. Second, context compression can create a substantial mismatch between training and inference. Third, agents may retrieve benchmark content from the open web during evaluation, contaminating the results and overstating their performance. To overcome these bottlenecks, we introduce Glasseek, a fully transparent deep search framework spanning the complete development lifecycle, releasing all data, model weights, training recipes, and code. Specifically, for data construction, we establish a verifiable trajectory curation pipeline that systematically generates high-quality exploration paths. For training, we propose Compaction-Managed GSPO (CM-GSPO), which uses the same policy for search and summarization while optimizing only execution sub-trajectories, enabling end-to-end search-policy training across context-compaction boundaries. For evaluation, we conduct the first systematic audit of test-set leakage in open-web agents and release a modular anti-leakage plugin that seamlessly integrates into existing evaluation harnesses. Under this rigorous evaluation protocol, our 9B agent outperforms frontier proprietary agents across almost all deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open-weight agents, setting a new state of the art at the 9B scale.",
    "published": "2026-10-12T15:48:45Z",
    "updated": "2026-10-12T15:48:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16998"
  },
  {
    "id": "2610.16990",
    "title": "TabGift: A Context-Efficient Foundation Model for Tabular Data Generation",
    "authors": [
      "Yu-Sheng Li",
      "Jun-Peng Jiang",
      "Han-Jia Ye"
    ],
    "abstract": "Tabular data generation aims to synthesize realistic samples from limited observations while faithfully capturing the underlying data distribution. Tabular foundation models (TFMs), pretrained on diverse tabular tasks and adapted through in-context learning, have demonstrated strong predictive capabilities, suggesting the potential of extending this paradigm to tabular data generation. However, the strong predictive performance of TFMs often relies on sufficiently large context sets, whereas tabular generation is typically needed precisely when target data are scarce. Extending the foundation-model paradigm to generation therefore requires reliable distribution inference from only a limited context. To this end, we propose TabGift, a context-efficient tabular foundation model enabling both efficient distribution modeling and effective generation from only a few context samples. TabGift maps heterogeneous tables into a shared latent space with a pretrained tabular encoder, where an in-context diffusion model learns to denoise latent samples conditioned on a small set of clean examples. This design transfers generative priors across datasets and enables distribution inference from limited context, while a lightweight dataset-specific MLP decoder maps generated representations back to the original data space. Experiments on 7 classification and 11 regression datasets show that TabGift consistently outperforms representative baselines in synthetic data quality, with particularly strong gains under limited-context settings, while achieving substantially faster adaptation and generation.",
    "published": "2026-10-12T15:43:52Z",
    "updated": "2026-10-12T15:43:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16990"
  },
  {
    "id": "2610.16988",
    "title": "Self-Supervised Learning of Semantically Consistent Visual Features via a Simple 3D Prior",
    "authors": [
      "Sebastian Day",
      "Oisin Mac Aodha"
    ],
    "abstract": "Visual features extracted from vision models like DINOv2 or Stable Diffusion enable high quality semantic correspondence between images. However, such features exhibit documented limitations that hinder accurate correspondence estimation such as the inability to disambiguate the left from right for categories exhibiting symmetries or repeated parts. Previous attempts to improve these features rely on using supervised data such as annotated keypoint pairs or camera pose information, or make restrictive topological assumptions, such as modelling the object of interest as a 3D sphere. We introduce a new self-supervised approach that allows us to learn features for topologically complex object categories using a simple prior. Instead of relying on an expensive instance-level analysis by synthesis pipeline, our approach makes use of contrastive learning and distribution matching at the global dataset-level to learn the coarse shape and appearance of a category. Combined with additional geometric losses, this enables us to replicate the global and local statistics of visual features which match those that are extracted from real images. Quantitative results are presented across several challenging object categories, demonstrating the effectiveness of our approach.",
    "published": "2026-10-12T15:42:59Z",
    "updated": "2026-10-12T15:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.16988"
  },
  {
    "id": "2610.16985",
    "title": "AUGUstus: Autonomous Driving VLA Model with Unified Generation and Understanding",
    "authors": [
      "Yuqi Ye",
      "Caigao Jiang",
      "Zhuonan Wang",
      "Congyuan Pei",
      "Chao Qu",
      "Changhao Peng",
      "Junhong Lin",
      "Qize Yu",
      "Zetian Song",
      "Guangzhao Fu",
      "Chongruo Wu",
      "Shiyu Huang",
      "Shuchang Zhou",
      "Honggou Yang",
      "Wei Gao"
    ],
    "abstract": "Vision-language-action (VLA) models show strong potential for end-to-end autonomous driving by leveraging world knowledge and understanding to excel in long-tail scenarios. However, current VLAs have two limitations: 1) Degeneration into vision-action (VA) models. For low latency, regression/flow-based methods directly generate actions but underuse VLM understanding, causing unsafe, unexplainable actions. 2) Autoregressive high latency. Autoregressive methods sequentially generate chain-of-thought (CoT) and action tokens, fully leveraging VLM understanding, but high latency hinders deployment. To enable low-latency deployment while using CoT to assist action generation, we propose AUGUstus, an Autonomous-driving VLA model with Unified Generation and Understanding. We unify diffusion-based action generation and autoregressive CoT understanding in one model, where understanding only serves generation. Joint CoT supervision preserves VLM spatial understanding in shared representation for safer, more accurate trajectories. AUGUstus-mode orders action generation before CoT, so CoT supervises reliable actions during training while inference needs only action output, enabling low latency. AUGUstus-GRPO, a unified GRPO algorithm, jointly optimizes action and CoT, improving action performance. Experiments show AUGUstus achieves 94.6 PDMS on NAVSIMv1 and 90.7 EPDMS on NAVSIMv2, SOTA planning without scorer module. On nuScenes, it achieves average L2 error 0.27 m and average collision rate 0.05%, best among compared methods. To validate AUGUstus practicality, we train on in-house data with 512 NVIDIA H800 GPUs for ~2 days, evaluate on an internal 1,000 km dataset, and preliminarily deploy on a real vehicle, achieving 12 Hz operation. Project page: https://augustus-ad.github.io",
    "published": "2026-10-12T15:42:09Z",
    "updated": "2026-10-12T15:42:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16985"
  },
  {
    "id": "2610.16984",
    "title": "From Suboptimal to Optimal: One-Step Latent Flow Policies for Offline Reinforcement Learning",
    "authors": [
      "Shenghua Lu",
      "Zixuan Yang",
      "Rongxu Zhao",
      "Bohao Qu",
      "Jifeng Hu",
      "Hechang Chen"
    ],
    "abstract": "Offline reinforcement learning aims to learn effective policies from fixed datasets without environment interaction. Although generative models such as diffusion and flow matching enhance policy expressiveness, they typically start from uninformative Gaussian noise and generate actions through multi-step iteration, leading to high computational costs and failing to effectively leverage suboptimal trajectories in datasets. We propose MeanFlow2Better (MF2B), which reformulates offline RL as generative decision chunk optimization from current performance status to better performance status in a high-level latent decision space. MF2B maps trajectory chunks to high-level latent decision representations through an encoder, placing generation starting points within a structured decision space sculpted by behavioral data. The model learns a shared conditional mean velocity field in this space, constructing two flow mappings: from Gaussian-Induced Decision Sources toward positive behavioral decision regions, and from suboptimal decisions toward high-value decision regions. Both flow mappings complete decision refinement through one-step ODE integration over the unit time interval $Δt=1$, requiring neither multi-step iterative sampling nor backpropagation through time. Furthermore, we propose hierarchical chunk-level advantage to guide the flow direction toward high-return regions, where the high-level decisions cover multiple low-level actions, leading to sequence length compression from $T$ to $K \\approx T/H$ and significantly lower computational overhead. On the D4RL Gym-MuJoCo benchmark, MF2B achieves an average score of 90.91, matching or surpassing strong baselines.",
    "published": "2026-10-12T15:41:40Z",
    "updated": "2026-10-12T15:41:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16984"
  },
  {
    "id": "2610.16980",
    "title": "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models",
    "authors": [
      "Max Achterweust",
      "Stefan Groot Nibbelink",
      "Vincent J. de Beer",
      "Stefan Schipper",
      "Zeynep Yüksektepe",
      "Pedro Andrade da Silva",
      "Aurelia Peppelaar",
      "Martijn J. van der Willigen",
      "Christophe B. Minkenberg",
      "Robert F. van der Willigen"
    ],
    "abstract": "Artificial Intelligence (AI) models are increasingly developed, published and used across scientific fields. Researchers, students and industry professionals who want to apply these models to their own research questions often lack the programming and data science expertise to do so. Existing guidelines cover single steps, but not the route from a published model to working predictions on one's own data. Here we present the hands-on workflow PRAISE, a Practical, Reproducible AI-model Implementation for Science and Education, that helps non-programmers implement published AI models step by step. Because implementations rarely work the first time, PRAISE anticipates common failures and provides a fallback route for each. As a proof of principle, three BSc chemistry students and their tutor applied PRAISE without prior programming or data science knowledge. They reproduced, validated and extended a state-of-the-art model that predicts enzyme-substrate interactions. This shows that with PRAISE, implementing an AI model from the literature becomes a learnable skill, one that turns non-programmer scientists from users into evaluators and improvers of AI models.",
    "published": "2026-10-12T15:39:12Z",
    "updated": "2026-10-12T15:39:12Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.16980"
  }
];
